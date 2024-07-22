import { useNavigate } from "react-router-dom";
import "../css/IntroductionPage.css";
import titleImage from "../assets/image/title.png";

function IntroductionPage() {
  const navigate = useNavigate();

  return (
    <div className="introduction-page">
      <img src={titleImage} alt="MOGURI" className="background-image" />
      <div className="content">
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="register-button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default IntroductionPage;
