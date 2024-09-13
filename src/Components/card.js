import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import './card.css';
import { IoTimer } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";



const empty = () => {
  return;
};

const Card = forwardRef(({ title, bodyText, linkText, cardContent, backgroundImage, time = "",type = "",onExpand= empty}, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animationState, setAnimationState] = useState('initial');
  const [bodyState, setBodyState] = useState('visible');
  const [containerState, setContainerState] = useState('hidden');

  useImperativeHandle(ref, () => ({
    closeCard
  }));


  const handleExpandClick = () => {
    if (isExpanded) {
      closeCard();
    } else {
      openCard();
    }
  };

  const openCard = () => {
    if (!isExpanded) {
      setAnimationState('expanding');
      setBodyState('fading-out');
      setTimeout(() => {
        setContainerState('visible');
        setTimeout(() => {
          setBodyState('fading-in');
          setContainerState('fading-in');
        }, 1500);
      }, 1000);
      onExpand(true);
    }
  };

  const closeCard = () => {
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
      <div className="short">{time}<IoTimer style={{width: '25px', height: '25px' }}/><br/>
      {type}<FaLightbulb style={{width: '25px', height: '25px' }}/></div>
        <div className="card-main-content">
       
          <h2 className="card-title">{title}</h2>
          <p className={`card-body ${bodyState}`}>
              {bodyText}
            </p>
          

          <div className={`card-content-container ${containerState}`}>
            {cardContent}
          </div>
        </div>
        <button className={'button ${animationState}'} onClick={handleExpandClick}>
          {isExpanded ? 'Close' : linkText}
        </button>
      </div>
    </div>
  );
});

export default Card;
