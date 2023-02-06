import React from "react";
import SideBar from "../../ui/SideBar/SideBar";
export function Navbar({ setActiveMenu, activeMenu }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="logo"></div>
      </div>
      <div className="navbar__menu menu">
        <ul className="menu__links">
          <li className="menu__link">
            <a href="#">Home</a>
          </li>
          <li className="menu__link">
            <a href="#">New</a>
          </li>
          <li className="menu__link">
            <a href="#">Popular</a>
          </li>
          <li className="menu__link">
            <a href="#">Trending</a>
          </li>
          <li className="menu__link">
            <a href="#">Categories</a>
          </li>
        </ul>
        <div className="menu__icon" onClick={() => setActiveMenu(true)}></div>
        <SideBar active={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </nav>
  );
}
