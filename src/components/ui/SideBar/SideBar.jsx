import React from "react";

function SideBar({ active, setActiveMenu }) {
  return (
    <div className={active ? "navbar__sideBar" : "navbar__sideBar hide"}>
      <div className="navbar__sideBar-close">
        <img
          src="/public/resources/icon-menu-close.svg"
          alt="icon-close"
          onClick={() => setActiveMenu(false)}
        />
      </div>
      <ul className="navbar__sideBar-links">
        <li className="navbar__sideBar-link">Home</li>
        <li className="navbar__sideBar-link">New</li>
        <li className="navbar__sideBar-link">Popular</li>
        <li className="navbar__sideBar-link">Trending</li>
        <li className="navbar__sideBar-link">Categories</li>
      </ul>
    </div>
  );
}

export default SideBar;
