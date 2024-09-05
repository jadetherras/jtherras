import React from 'react';
import "./card.css";

const Card = ({ title, bodyText, linkText, linkHref }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-body">{bodyText}</p>
          <a href={linkHref} className="button">
            {linkText}
          </a>
        </div>
      </div>
    );
  };

  export default Card;