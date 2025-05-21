import "../CSS/header.css";
import aparatLG from "../images/aparat-icon.webp";
import "../CSS/responsive.css"
const Header = ({ toggleSide }) => {
  return (
    <header>
      <div className="child1">
        <i className="bi bi-list" onClick={toggleSide}></i>
        <img src={aparatLG} alt="aparat logo" className="logo-ap" />
      </div>
      <div className="child2">
        <div className="search">
          <input
            type="text"
            className="in-search"
            placeholder="جستجو ویدیو در آپارات"
          />
          <i className="bi bi-search"></i>
        </div>
        <button className="mic-btn">
          <i className="bi bi-mic"></i>
        </button>
      </div>
      <div className="child3">
        <button className="ch-btn">
          <i className="bi bi-three-dots"></i>
        </button>
        <button className="ch-btn">
          <i className="bi bi-cloud-upload"></i>
        </button>
        <button className="login-btn">
          ورود به آپارات<i className="bi bi-person"></i>
        </button>
      </div>
    </header>
    
  );
};

export default Header;
