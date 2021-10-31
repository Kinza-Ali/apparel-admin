import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar">
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
