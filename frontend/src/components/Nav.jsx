import "../components/Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="banner-image" />
      </div>
      <div className="nav-right">
        <span className="logout">Logout</span>
        <div className="community-container">
          <div className="community-image" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
