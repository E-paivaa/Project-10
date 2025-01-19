import headerAvatar from "../../assets/avatar.png";
import "./SideBar.css";

function Sidebar() {
    return (
    <div className="sidebar">
    <img className="sidebar__avatar"src={headerAvatar} alt="Default avatar"/>
    <p className="sidebar__username"></p>
    </div>
    )
    }
    
    export default Sidebar;