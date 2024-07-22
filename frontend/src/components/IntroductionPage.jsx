
import { useNavigate } from "react-router-dom";
import "../css/IntroductionPage.css";

function IntroductionPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="introduction-page">
      <div className="background-image-main"></div>
      <div className="content">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="register-button" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
}

export default IntroductionPage;
