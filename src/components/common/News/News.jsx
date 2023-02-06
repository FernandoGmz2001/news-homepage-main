import React from "react";

function News({ title, content }) {
  return (
    <div className="news__new new">
      <div className="new__title">{title}</div>
      <div className="new__content">{content}</div>
    </div>
  );
}

export default News;
