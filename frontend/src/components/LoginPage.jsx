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
      <div className="background-image-login"></div>
      <div className="modal-login">
        <h2>MOGURI</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input type="text" id="id" placeholder="ID" required />
          </div>
          <div className="form-group">
            <label htmlFor="pw">PW</label>
            <input type="password" id="pw" placeholder="PW" required />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
