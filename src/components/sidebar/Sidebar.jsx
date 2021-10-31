import React from "react";
import "./Sidebar.css";
import { Timeline } from "@material-ui/icons";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sideMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeIcon /> Home
            </li>
            <li className="sidebarListItem">
              <Timeline /> Analytics
            </li>
            <li className="sidebarListItem">
              <LocalMallIcon /> Products
            </li>
            <li className="sidebarListItem">
              <ShoppingCartIcon /> Orders
            </li>
            <li className="sidebarListItem">
              <PersonIcon /> Users
            </li>
            <li className="sidebarListItem">
              <LogoutIcon /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
