import "../css/RegisterPage.css";
import backgroundImage from "../assets/image/title.png";

function RegisterPage() {
  return (
    <div className="register-page">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image-register"
      />
      <div className="modal-register">
        <h2>MOGURI</h2>
        <form>
          <input type="text" placeholder="ID" required />
          <input type="password" placeholder="PW" required />
          <input type="email" placeholder="Email" required />
          <button type="submit" className="register-button">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
