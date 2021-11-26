import React from "react";
import "./Topbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import userService from "../../services/UserService";

function Topbar() {
  const handelLogout = () => {
    userService.logout();
    // window.location.reload();
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">Soul</span>
        </div>
        <div className="topRight">
          {userService.isUser() ? (
            <button className="topbarBtn" onClick={handelLogout}>
              <LogoutIcon /> Logout
            </button>
          ) : (
            <div className="topbarAvatar">
              <AccountCircleIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
