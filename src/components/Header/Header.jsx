import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.png";
import "./Header.css";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Weather logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}{" "}
      </p>
      <button
        className="header__add-clothes"
        type="button"
        onClick={handleAddClick}
      >
        {" "}
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__username"> Edward Paiva</p>
        <img src={headerAvatar} alt="avatar" className="header__avatar" />
      </div>
    </div>
  );
}

export default Header;
