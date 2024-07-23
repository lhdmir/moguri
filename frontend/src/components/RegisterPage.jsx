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
      <div className="background-image-register"></div>
      <div className="modal-register">
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
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
