import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../components/Nav.css";
import "../assets/image/banner.png";

const Nav = () => {
  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   const token = Cookies.get("token");
  //   console.log(token);

  //   if (!token) {
  //     console.error("Token not found");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/logout",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       navigate("/");
  //     } else {
  //       console.error("Logout failed");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    // <div className="nav-container">
    //   <div className="nav-left">
    //     <span className="moguri-banner">MOGURI</span>
    //   </div>
    //   <div className="nav-container-logout" onClick={handleLogout}>
    //     <span className="nav-logout">Logout</span>
    //   </div>
    //   <div className="nav-container-banner">
    //     <span className="community-banner">community</span>
    //   </div>
    // </div>
    <div class="nav-container">
  <div class="nav-left">
    MOGURI
  </div>
  <div class="nav-container-right">
    <div class="nav-container-logout">Logout</div>
  </div>
</div>
  );
};

export default Nav;
