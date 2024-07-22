import "../css/LoginPage.css";
import backgroundImage from "../assets/image/title.png";

function LoginPage() {
  return (
    <div className="login-page">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image-login"
      />
      <div className="modal-login">
        <h2>MOGURI</h2>
        <form>
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
