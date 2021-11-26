import React from "react";
import "./Topbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">Soul</span>
        </div>
        <div className="topRight">
          <div className="topbarAvatar">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
