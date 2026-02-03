import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Bin } from "../../../types";


export default function BinDetails() {
  const { binId } = useParams();
  const navigate = useNavigate();
  const [bin, setBin] = useState<Bin>();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/bins/${binId}`)
      .then(res => res.json())
      .then(data => setBin(data));
  }, [binId]);


  const handleUpdate = async () => {
    await fetch(`http://127.0.0.1:8000/api/bins/${binId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bin)
    });
    alert("Bin updated");
  };


  const handleDelete = async () => {
    if (!confirm("Delete this bin permanently?")) return;

    await fetch(`http://127.0.0.1:8000/api/bins/${binId}`, {
      method: "DELETE"
    });
    navigate("/admin/bins");
  };

  if (!bin) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Bin</h2>

      <input
        value={bin.name}
        onChange={e => setBin({ ...bin, name: e.target.value })}
      />

      <input
        type="number"
        value={bin.fill_level}
        onChange={e =>
          setBin({ ...bin, fill_level: Number(e.target.value) })
        }
      />

      <input
        type="number"
        value={bin.capacity}
        onChange={e =>
          setBin({ ...bin, capacity: Number(e.target.value) })
        }
      />

      <select
        value={bin.status}
        onChange={e => setBin({ ...bin, status: e.target.value })}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button onClick={handleUpdate}>Save Changes</button>
      <button onClick={handleDelete} style={{ color: "red" }}>
        Delete Bin
      </button>
    </div>
  );
}
