import React, { useEffect, useRef } from 'react';

import Red from "./SpaCLred.png"
import Green from "./SpaCLgreen.png"

const Lantern = () => {
  const imgRef = useRef(null);

  const imageWidth = 100; // Set the width of the image
  const imageHeight = 100; // Set the width of the image

  const maxWidth = document.documentElement.clientWidth - imageWidth;
  const maxHeight = document.documentElement.scrollHeight - imageHeight;

  // Initialize random position
  const getRandomPosition = (Max) => {
    const random = Math.random() * Max;
    return random;
  };

  // Function to handle smooth opacity transition
  const fadeOut = (element) => {
    let opacity = 1;
    const fade = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fade); 
      } else {
        opacity -= 0.05; 
        element.style.opacity = opacity;
      }
    }, 100); 
  };

  const animate = () => {
    if (imgRef.current) {
    imgRef.current.src = Green;
    }
    setTimeout (() => {
    fadeOut(imgRef.current);
  }, 1000);
  };
  

  return (
    <img className='lantern'
      ref={imgRef}
      src={Red}
      alt="lantern !"
      style={{
        position: 'absolute',
        left: getRandomPosition(maxWidth),
        top: getRandomPosition(maxHeight),
        width: imageWidth,
        zIndex: 1
      }}
      onClick={animate}
    />
  );
};

export default Lantern;