import React from "react";
import "./Sidebar.css";
import { Timeline, Storefront } from "@material-ui/icons";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sideMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeOutlinedIcon className="sidebarIcon" /> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" /> Products
            </li>
            <li className="sidebarListItem">
              <ShoppingCartOutlinedIcon className="sidebarIcon" /> Orders
            </li>
            <li className="sidebarListItem">
              <PersonOutlineOutlinedIcon className="sidebarIcon" /> Users
            </li>
            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
