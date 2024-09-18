import React, { useEffect, useRef, useState } from 'react';

import Red from "./SpaCLred.png"
import Green from "./SpaCLgreen.png"

let totalCount = 0;
let lanternCount = 0;

const Lantern = ({onCountChange, major = false}) => {

  const imgRef = useRef(null);

  let imageWidth = 100; // Set the width of the image
  let imageHeight = 100; // Set the width of the image

  let maxWidth = document.documentElement.clientWidth - imageWidth;
  let maxHeight = document.documentElement.scrollHeight - imageHeight;

  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);

  // Initialize random position
  const getRandomPosition = (Max) => {
    const random = Math.random() * Max;
    return random;
  };

  // Constructor-like useEffect: Runs only once on creation
  useEffect(() => {
    if (major) {
      imageHeight = 5*imageHeight;
      imageWidth = 5*imageWidth;
      setLeftPos(document.documentElement.clientWidth/2-imageWidth);
      setTopPos(document.documentElement.scrollHeight/2-imageHeight);
      console.log('Left Position:', leftPos, 'Top Position:', topPos);
    } else {
      setLeftPos(getRandomPosition(maxWidth));
      setTopPos(getRandomPosition(maxHeight));
    }

    totalCount += 1/2; //double call (quick fix)
    if (onCountChange) {
      onCountChange(lanternCount, totalCount); 
    }
    return () => {};}, []);


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
    lanternCount +=1;
    onCountChange(lanternCount, totalCount);
    if (imgRef.current) {
    imgRef.current.src = Green;
    }
    setTimeout (() => {
    fadeOut(imgRef.current);
  }, 1000);
  };
  

 return (
    <img 
      className='lantern'
      ref={imgRef}
      src={Red}
      alt="lantern !"
      style={{
        position: 'absolute',
        left: leftPos,
        top: topPos,
        width: imageWidth,
        zIndex: 1
      }}
      onClick={animate}
    />
  );
};

export default Lantern;