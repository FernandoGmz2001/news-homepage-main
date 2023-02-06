import { Navbar } from "../../common/Navbar/Navbar";
import { Header } from "../../common/Header/Header";
import React, { useState } from "react";
import News from "../../common/News/News";
import "./Home.css";
import news from "../../../utils/news";
import techNews from "../../../utils/techNews.json";
import TechNews from "../../common/TechNews/TechNews";

function Home() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <main className="main gray-cover-main">
      <div className={activeMenu ? "gray-cover" : "hide"}></div>
      <Navbar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <div className="desktop-top">
        <Header />
        <article className="news">
          <h2 className="news__title">New</h2>
          {news.map((item) => (
            <News key={item.id} title={item.title} content={item.content} />
          ))}
        </article>
      </div>
      <div className="desktop-bottom">
        <article className="article">
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
    </main>
  );
}

export default Home;
