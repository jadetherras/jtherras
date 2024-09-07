import React, { useState, useEffect } from 'react';
import './card.css';

const Card = ({ title, bodyText, linkText, cardContent, backgroundImage }) => {
  const [Expansion, setExpand] = useState(false); // Track card expansion state
  const [isExpanded, setIsExpanded] = useState(false); // Track card expansion state
  const [showBody, setShowBody] = useState(false);     // Control showing of the body text after expansion
  
  const handleExpandClick = () => {
    if (isExpanded) {
      // If collapsing, reset states immediately
      setShowBody(false);
      setIsExpanded(false);
      setExpand(false)
    } else {
      setExpand(true);
      setTimeout(() => {
        setIsExpanded(true);
      }, 1500);
      setTimeout(() => {
        setShowBody(true);   // Step 3: Show the body after card expands
      }, 5000);
    }
  };

  return (
    <div
      className={`card ${isExpanded ? 'expanded' : ''}`}
      style={{ '--background-image': `url(${backgroundImage})` }}
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className={`card-body ${Expansion ? (showBody ? 'visible' : 'invisible') : ''}`}>{bodyText}</p>

        {isExpanded && (
          <div className={`card-content-container ${isExpanded ? (showBody ? 'visible' : 'invisible') : ''}`}>
            {cardContent}
          </div>
        )}

        <button className="button" onClick={handleExpandClick}>
          {isExpanded ? 'Collapse' : linkText}
        </button>
      </div>
    </div>
  );
};

export default Card;
