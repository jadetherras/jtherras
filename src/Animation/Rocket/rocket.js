import React, { useEffect, useRef } from 'react';

import up from "./SpaCgo.png";
import down from "./SpaCdown.png";

const TheRocket= () => {
  const Up = useRef(null);
  const Down = useRef(null);
  const speed = 2;

  const imageWidth = 100; // Set the width of the image
  const imageHeight = 214;

  let starting = 0;
  // Initialize random position
  const getStartPosition = (id) => {

    const maxWidth = document.documentElement.clientWidth - imageWidth;
    const maxHeight = document.documentElement.scrollHeight;
    
    starting = maxHeight;
    if (id == "up") {
      const left = 0.1* maxWidth;
      const top = maxHeight;
      return {left,top}
    } else {
      const left = 0.9* maxWidth;
      const top = -imageHeight;
      return {left,top}
    }
  };

  useEffect(() => {
    let animationFrameId;

    if (Up.current) {
      const { left, top } = getStartPosition('up');
      Up.current.style.left = `${left}px`;
      Up.current.style.top = `${top}px`;
    }

    if (Down.current) {
      const { left, top } = getStartPosition('down');
      Down.current.style.left = `${left}px`;
      Down.current.style.top = `${top}px`;
    }


    const animate = () => {
      const maxHeight = document.documentElement.scrollHeight;
      const maxWidth = document.documentElement.clientWidth - imageWidth;
        
      if (Up.current) {
        const currentTop = parseFloat(Up.current.style.top || 0);
        
        let newTop = currentTop - speed;
        if (newTop < -imageHeight) {
          newTop = maxHeight;
        }
        Up.current.style.top = `${newTop}px`;
        Up.current.style.left = 0.1* maxWidth;
      }
     
      if (Down.current) {
        const currentTop = parseFloat(Down.current.style.top || 0);
        
        let newTop = currentTop + speed;
        if (newTop > starting) {
          newTop = -imageHeight;
        }
        Down.current.style.top = `${newTop}px`;
        Down.current.style.left = 0.9* maxWidth;
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Clean up the animation on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
    <img
    id = "up"
      ref={Up}
      src={up} 
      alt="Moving element"
      style={{
        position: 'absolute',
        width: imageWidth,
        zIndex: 1
      }}
    />
    <img
    id = "down"
      ref={Down}
      src={down} 
      alt="Moving element"
      style={{
        position: 'absolute',
        width: imageWidth,
        zIndex: 1
      }}
    />
    </>
  );
};

export default TheRocket;