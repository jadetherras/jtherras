import React, { useState, useEffect } from 'react';
import './card.css';

const Card = ({ title, bodyText, linkText, cardContent, backgroundImage, onExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animationState, setAnimationState] = useState('initial');
  const [bodyState, setBodyState] = useState('visible');
  const [containerState, setContainerState] = useState('hidden');

  const handleExpandClick = () => {
    if (isExpanded) {
      setContainerState('visible');
      setBodyState('fading-out');
      setTimeout(() => {
        setAnimationState('collapsing');
        onExpand(false);
      }, 1000);
        setTimeout(() => {
          setContainerState('hidden');
          setTimeout(() => {
            setBodyState('fading-in');
          }, 1000);
        }, 1000);
    } else {
      setAnimationState('expanding');
      setBodyState('fading-out');
      setTimeout(() => {
        setContainerState('visible');
        setTimeout(() => {
          setBodyState('fading-in');
          setContainerState('fading-in');
        }, 2000); 
      }, 1000);
      onExpand(true);
    }
  };

  useEffect(() => {
    let timer;
    if (animationState === 'expanding') {
      timer = setTimeout(() => {
        setAnimationState('expanded');
        setIsExpanded(true);
      }, 1000);
    } else if (animationState === 'collapsing') {
      timer = setTimeout(() => {
        setAnimationState('initial');
        setIsExpanded(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [animationState]);

  return (
    <div
      className={`card ${animationState}`}
      style={{ '--background-image': `url(${backgroundImage})` }}
    >
      <div className="card-content">
        <div className="card-main-content">
          <h2 className="card-title">{title}</h2>
          <p className={`card-body ${bodyState}`}>
              {bodyText}
            </p>
          

          <div className={`card-content-container ${containerState}`}>
            {cardContent}
          </div>
        </div>
        <button className="button" onClick={handleExpandClick}>
          {isExpanded ? 'Collapse' : linkText}
        </button>
      </div>
    </div>
  );
};

export default Card;
