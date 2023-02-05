import React from "react";

function News({ title, content }) {
  return (
    <div className="main__news-news">
      <div className="news__title">{title}</div>
      <div className="news__content">{content}</div>
    </div>
  );
}

export default News;
