import os
import numpy as np
from pathlib import Path
from PIL import Image

os.environ["CUDA_VISIBLE_DEVICES"] = "-1"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

import tensorflow as tf
from keras.applications.resnet import preprocess_input


tf.config.threading.set_intra_op_parallelism_threads(1)
tf.config.threading.set_inter_op_parallelism_threads(1)


_BACKEND_ROOT = Path(__file__).resolve().parent.parent.parent
_MODEL_PATH = _BACKEND_ROOT / "Models" / "ewaste_fp32.tflite"


HIGH_CONFIDENCE = 0.75
LOW_CONFIDENCE = 0.40

CLASS_NAMES = [
    "Battery",
    "Keyboard",
    "Microwave",
    "Mobile",
    "Mouse",
    "PCB",
    "Player",
    "Printer",
    "Television",
    "Washing Machine",
    "Laptop"
]

BASE_POINTS = {
    "Battery": 110,
    "Keyboard": 36,
    "Microwave": 270,
    "Mobile": 150,
    "Mouse": 27,
    "PCB": 165,
    "Player": 90,
    "Printer": 200,
    "Television": 330,
    "Washing Machine": 400,
    "Laptop": 180,
}

MANUAL_OVERRIDE_POINTS = {
    "PCB": 90,
    "Battery": 60,
    "Mobile": 80,
    "Player": 50,
    "Mouse": 15,
    "Keyboard": 20,
    "Printer": 120,
    "Microwave": 150,
    "Television": 180,
    "Washing Machine": 220,
    "Laptop": 100,
}


class WasteDetector:
    def __init__(self):
        if not _MODEL_PATH.exists():
            raise FileNotFoundError(f"TFLite model not found at {_MODEL_PATH}")

        self.interpreter = tf.lite.Interpreter(model_path=str(_MODEL_PATH))
        self.interpreter.allocate_tensors()

        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()

        self.input_index = self.input_details[0]["index"]
        self.output_index = self.output_details[0]["index"]

        print("✅ TFLite model loaded successfully")

    def _preprocess(self, image_path: str) -> np.ndarray:
        with Image.open(image_path) as img:
            img = img.convert("RGB")
            img = img.resize((224, 224))
            arr = np.array(img, dtype=np.float32)

        arr = np.expand_dims(arr, axis=0)
        arr = preprocess_input(arr)  # ResNet-style normalization
        return arr

    def predict(self, image_path: str) -> dict:
        if not os.path.exists(image_path):
            raise FileNotFoundError(f"Image not found at {image_path}")

        x = self._preprocess(image_path)

        self.interpreter.set_tensor(self.input_index, x)
        self.interpreter.invoke()

        preds = self.interpreter.get_tensor(self.output_index)[0]

        class_idx = int(np.argmax(preds))
        confidence = float(preds[class_idx])
        waste_type = CLASS_NAMES[class_idx]

        all_probs = {
            CLASS_NAMES[i]: float(preds[i])
            for i in range(len(CLASS_NAMES))
        }

        return {
            "waste_type": waste_type,
            "confidence": round(confidence, 4),
            "class_index": class_idx,
            "all_probabilities": all_probs,
        }

    def get_base_points(self, waste_type: str) -> int:
        return BASE_POINTS.get(waste_type, 0)

    def get_manual_override_points(self, waste_type: str) -> int:
        return MANUAL_OVERRIDE_POINTS.get(waste_type, 50)



_detector_instance: WasteDetector | None = None

def get_waste_detector() -> WasteDetector:
    global _detector_instance
    if _detector_instance is None:
        _detector_instance = WasteDetector()
    return _detector_instance



def calculate_points(waste_type: str, confidence: float, user_override: bool = False) -> int:
    base = BASE_POINTS.get(waste_type, 0)
    manual = MANUAL_OVERRIDE_POINTS.get(waste_type, 50)

    if user_override or confidence < LOW_CONFIDENCE:
        return int(manual)

    if confidence >= HIGH_CONFIDENCE:
        return int(base * confidence)

    return int(base * 0.6)



def predict_waste(image_path: str) -> dict:
    detector = get_waste_detector()
    result = detector.predict(image_path)

    waste_type = result["waste_type"]
    confidence = result["confidence"]

    result["base_points"] = detector.get_base_points(waste_type)
    result["points_to_earn"] = calculate_points(waste_type, confidence)
    result["estimated_value"] = result["base_points"]

    return result
