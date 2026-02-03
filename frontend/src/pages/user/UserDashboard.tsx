import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

const Dashboard = () => {
  const { profile, logout } = useAuth();
  const navigate = useNavigate()
  // console.log(profile)

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
      <h1>Hello {profile?.name} 👋</h1>
      <p>Welcome to the Smart E-Waste System</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
