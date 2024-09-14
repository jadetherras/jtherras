import React, { useEffect, useRef } from 'react';
import './rain.css';

// based on https://codepen.io/jason-knight/pen/vYeZKXG
const Rain = () => {

    const generateRandomBlue = () => {
        const hue = Math.floor(Math.random() * 60 + 180); 
        const saturation = Math.floor(Math.random() * 50 + 50); 
        const lightness = Math.floor(Math.random() * 50 + 25); 
        
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      };

  const rainContainerRef = useRef(null);

  useEffect(() => {
    const rainContainer = rainContainerRef.current;

    for (let amount = 10; amount--; ) {
      let distance = Math.random();
      const raindrop = document.createElement('i');
      const randomBlue = generateRandomBlue();
      
      // Apply styles to the raindrop
      Object.assign(raindrop.style, {
        width: distance * 5 + 'px',
        left: Math.floor(Math.random() * 105 - 2.5) + '%',
        animationDelay: Math.random() * -20 + 's',
        animationDuration: distance * 5 + 's',
        background: `linear-gradient(transparent, ${randomBlue})`,
        opacity: distance * 0.8 + 0.2,
      });

      // Append the raindrop to the container
      rainContainer.appendChild(raindrop);
    }
  }, []);

  return <div ref={rainContainerRef} className="rain-container"></div>;
};

export default Rain;