import React, { useEffect, useRef } from 'react';

const Background = () => {
  const imgRef = useRef(null);
  const speed = 0.75;
  let dirR = speed; // Smaller increments for smooth movement
  let dirL = speed;

  const imageWidth = 326; // Set the width of the image
  const imageHeight = 120; // Set the width of the image

  // Initialize random position
  const getRandomPosition = () => {
    const maxWidth = document.documentElement.clientWidth - imageWidth;
    const maxHeight = document.documentElement.scrollHeight - imageHeight;
    const left = Math.random() * maxWidth;
    const top = Math.random() * maxHeight;
    return { left, top };
  };


  function moveDir() {
    if (Math.random() > 0.999) {
      swapDirL();
    }
    if (Math.random() < 0.0001) {
      swapDirR();
    }
  }

  function swapDirL() {
    dirL = dirL === speed ? -speed : speed;
  }

  function swapDirR() {
    dirR = dirR === speed ? -speed : speed;
  }

  useEffect(() => {
    let animationFrameId;

    const { left, top } = getRandomPosition();
    
    if (imgRef.current) {
      imgRef.current.style.left = `${left}px`;
      imgRef.current.style.top = `${top}px`;
    }

    const animate = () => {
      if (imgRef.current) {
        const currentLeft = parseFloat(imgRef.current.style.left || 0);
        const currentTop = parseFloat(imgRef.current.style.top || 0);

        // Get viewport dimensions
        const maxWidth = document.documentElement.clientWidth - imageWidth;
        const maxHeight = document.documentElement.scrollHeight - imageHeight;

        // Update position based on the direction, but prevent going out of bounds
        let newLeft = currentLeft + dirL;
        let newTop = currentTop + dirR;

        // Prevent moving out of the page horizontally
        if (newLeft < 0) {
          newLeft = 0;
          swapDirL();
        } else if (newLeft > maxWidth) {
          newLeft = maxWidth;
          swapDirL();
        }

        // Prevent moving out of the page vertically
        if (newTop < 0) {
          newTop = 0;
          swapDirR();
        } else if (newTop > maxHeight) {
          newTop = maxHeight;
          swapDirR();
        }

        // Apply the new position
        imgRef.current.style.left = `${newLeft}px`;
        imgRef.current.style.top = `${newTop}px`;

        imgRef.current.style.transform = `rotate(${dirL < 0 ? '180deg' : '0deg'})`;

        moveDir();
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
    <img className='moving'
      ref={imgRef}
      src="https://static.igem.wiki/teams/4888/wiki/game/gauche.png" 
      alt="Moving element"
      style={{
        position: 'absolute',
        width: imageWidth,
        zIndex: 1
      }}
    />
  );
};

export default Background;