
import { useNavigate } from "react-router-dom";
import "../css/RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직
    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="background-image"></div>
      <div className="modal-register">
        <h2>MOGURI</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ID" required />
          <input type="password" placeholder="PW" required />
          <input type="email" placeholder="Email" required />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
