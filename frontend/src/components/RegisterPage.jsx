import { useNavigate } from "react-router-dom";
import "../css/RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // 회원가입 로직을 여기에 추가
    navigate("/");
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form>
        <div>
          <label>ID</label>
          <input type="text" name="id" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
