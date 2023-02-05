import React, { useState } from "react";
import News from "../../common/News/News";
import "./Home.css";
import news from "../../../utils/news";
import techNews from "../../../utils/techNews.json";
import TechNews from "../../common/TechNews/TechNews";
import SideBar from "../../ui/SideBar/SideBar";

function Home() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="main gray-cover-main">
      <div className={activeMenu ? "gray-cover" : "hide"}></div>
      <nav className="navbar">
        <div className="navbar__logo">
          <img
            src="/resources/logo.svg"
            alt="logo"
            className="navbar__logo-img"
          />
        </div>
        <div className="navbar__menu">
          <img
            src="/resources/icon-menu.svg"
            alt="menu-icon"
            onClick={() => setActiveMenu(true)}
          />
          <SideBar active={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
      </nav>
      <header className="main__header">
        <div className="main__header-image">
          <img src="/resources/image-web-3-mobile.jpg" alt="header-image" />
        </div>
        <div className="main__header-content">
          <div className="main__header-content-title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="main__header-content-description">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </div>
          <div className="main__header-content-button">
            <button className="btnReadMore">Read More</button>
          </div>
        </div>
      </header>
      <article className="main__news">
        <div className="main__news-title">
          <h2>New</h2>
        </div>
        {news.map((item) => (
          <News key={item.id} title={item.title} content={item.content} />
        ))}
      </article>
      <article className="main__article">
        {techNews.map((item) => (
          <TechNews
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
        <TechNews />
      </article>
    </div>
  );
}

export default Home;
