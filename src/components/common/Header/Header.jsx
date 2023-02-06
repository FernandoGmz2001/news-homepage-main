import React from "react";
export function Header() {
  return (
    <header className="header">
      <div className="header__header-image header-image"></div>
      <div className="header__web-article web-article">
        <div className="web-article__container-left">
          <h1 className="web-article__title">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="web-article__container-right">
          <p className="web-article__description">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="web-article__button button">
            <button className="btnReadMore">Read More</button>
          </div>
        </div>
      </div>
    </header>
  );
}
