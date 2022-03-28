import React from "react";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const lis = document.querySelectorAll("li");
    function changActive() {
      lis.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    }

    lis.forEach((li) => li.addEventListener("click", changActive));
  }, []);
  return (
    <div className="menu-list">
      <ul className="main-menu">
        <li className="active">
          <a href="#">
            <i className="bx bxs-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-search"></i>Search
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-library"></i>Your Library
          </a>
        </li>
      </ul>
      <ul className="favourite-list">
        <li>
          <a href="#"><i class='bx bx-plus-circle'></i>Your Playlist</a>
        </li>
        <li>
          <a href="#"><i class='bx bx-heart-circle' ></i>Like Songs</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
