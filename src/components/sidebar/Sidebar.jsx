import React from "react";
import { Link } from "react-router-dom";
import { Timeline, Storefront } from "@material-ui/icons";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./Sidebar.css";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sideMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" /> Dashboard
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Products
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <ShoppingCartOutlinedIcon className="sidebarIcon" /> Orders
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutlineOutlinedIcon className="sidebarIcon" /> Users
              </li>
            </Link>
            <li className="sidebarListItem" style={{ marginTop: "300px" }}>
              <LogoutIcon className="sidebarIcon" /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
