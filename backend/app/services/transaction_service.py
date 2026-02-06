from app.models.transaction import Transaction
from app.models.user import User
from app.models.bin import Bin
from app.services.waste_detector import calculate_points
import uuid

def handle_deposit(db, user_id, bin_id, waste_type, base_points, confidence=None, user_override=False):
    bin_obj = db.query(Bin).filter_by(id=bin_id).first()

    if not bin_obj:
        return {"error": "Bin not found"}

    status = (bin_obj.status or "").lower()
    if status != "active":
        return {"error": f"Bin unavailable (status: {bin_obj.status})"}

    # Extra safety: don't allow deposits into a full bin
    if bin_obj.fill_level >= bin_obj.capacity:
        bin_obj.status = "full"
        db.commit()
        return {"error": "Bin is full"}

    conf = float(confidence) if confidence is not None else 0.0
    points = calculate_points(waste_type, conf, user_override)

    txn = Transaction(
        id=uuid.uuid4(),
        user_id=user_id,
        bin_id=bin_id,
        waste_type=waste_type,
        confidence=confidence,
        points_awarded=points
    )

    db.add(txn)

    db.query(User).filter_by(id=user_id).update(
        {User.points: User.points + points}
    )

    bin_obj.fill_level = min(bin_obj.fill_level + 10, bin_obj.capacity)
    # Mark bin full when it reaches ~90% capacity (or capacity)
    if bin_obj.fill_level >= int(0.9 * bin_obj.capacity):
        bin_obj.status = "full"

    db.commit()

    return {
        "success": True,
        "points_earned": points,
        "new_fill_level": bin_obj.fill_level
    }
