import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

const AdminDashboard = () => {
  const { profile, logout } = useAuth();
  const navigate = useNavigate()

  if (!profile) {
    return <div>Setting up your account…</div>;
  }

  const handleLogout = async () =>{
    try { 
      await logout()
      navigate("/auth/login", {replace: true})
    }
    catch(err: unknown) {
      console.log("Logout failed", err)
    }
  }

  return (
    <div>
      <h1>Hello Admin {profile?.name} 👋</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
