import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직을 여기에 추가
    navigate("/");
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div>
          <label>ID</label>
          <input type="text" name="id" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
