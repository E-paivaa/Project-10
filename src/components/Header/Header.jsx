import { Link } from "react-router-dom";
import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src={headerLogo} alt="Weather logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}{" "}
      </p>
      <ToggleSwitch/>
      <button
        className="header__add-clothes"
        type="button"
        onClick={handleAddClick}
      >
        {" "}
        + Add clothes
      </button>
      <Link to="/profile" className="header__link">
      <div className="header__user">
        <p className="header__username"> Edward Paiva</p>
        <img src={headerAvatar} alt="avatar" className="header__avatar" />
      </div>
      </Link>
    </div>
  );
}

export default Header;
