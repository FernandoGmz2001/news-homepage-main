import React from "react";

function TechNews({ id, title, description, image }) {
  return (
    <div className="article__techNews techNews">
      <div className="techNews__image-container image-container">
        <img src={image} alt={image} className="image-container--techNews" />
      </div>
      <div className="techNews__techNews-articles techNews-articles">
        <div className="techNews-articles__id">{id}</div>
        <div className="techNews-articles__title">{title}</div>
        <div className="techNews-articles__description">{description}</div>
      </div>
    </div>
  );
}

export default TechNews;
