import "../components/Nav.css";
import "../assets/image/banner.png"

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <span className="moguri-banner">MOGURI</span>
      </div>
        <div className="nav-container-logout">
          <span className="nav-logout">Logout</span>
        </div>
        <div className="nav-container-banner">
          <span className="community-banner">community</span>
        </div>
      </div>
  );
};

export default Nav;
