import React from "react";

function TechNews({ id, title, description, image }) {
  return (
    <div className="main__article-techNews">
      <div className="main__article-techNews-image">
        <img src={image} alt={image} />
      </div>
      <div className="main__article-techNews-content">
        <div className="main__article-techNews-content-id">{id}</div>
        <div className="main__article-techNews-content-title">{title}</div>
        <div className="main__article-techNews-content-description">
          {description}
        </div>
      </div>
    </div>
  );
}

export default TechNews;
