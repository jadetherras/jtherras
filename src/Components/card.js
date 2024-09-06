import React, { useState } from 'react';
import "./card.css";

const Card = ({ title, bodyText, linkText,cardContent,backgroundImage }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

    return (
      <div className={`card ${isExpanded ? 'expanded' : ''}`}
      style={{
        "--background-image": `url(${backgroundImage})`,
      }}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-body">{bodyText}</p>
          <div className="card-content-container">{cardContent}</div>
          <button className="button" onClick={handleExpandClick}>
            {isExpanded ? "Collapse" : linkText}
          </button>
        </div>
      </div>
    );
  };

  export default Card;