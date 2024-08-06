import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../components/Nav.css";
import "../assets/image/banner.png";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = Cookies.get("token");
    console.log(token);

    if (!token) {
      console.error("Token not found");
      return;
    }

    try {
      const response = await fetch("https://www.moguri.site:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // const handleLogout = () => {
  //   navigate("/");
  // };

  return (
    <div className="nav-container">
      <div className="nav-left">MOGURI</div>
      <div className="nav-container-right">
        <div className="nav-container-logout" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Nav;
