
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직
    navigate("/moguri-select");
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <div className="modal">
        <h2>MOGURI</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ID" required />
          <input type="password" placeholder="PW" required />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
