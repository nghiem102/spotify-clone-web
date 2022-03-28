import "../styles/LeftMenu.css";
import React from "react";
import Navbar from "./Navbar";

const LeftMenu = () => {
  return (
    <div className="LeftMenu">
      <div className="left_menu-header">
        <i className="bx bxl-spotify logo"></i>
        <p>Spotify</p>
        <i className="bx bx-dots-horizontal-rounded dots"></i>
      </div>
      <div className="btn-search">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <Navbar/>
    </div>
  );
};

export default LeftMenu;
