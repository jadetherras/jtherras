
import { useEffect } from 'react';
import './blood.css';

const Blood = () => {
  useEffect(() => {
    console.log('useEffect hook triggered');

    const createDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'drop';
      const R = Math.random() * 50 + 10
      drop.style.width = `${R}px`;
      drop.style.height = `${R + Math.random() * 20}px`;
      drop.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(drop);


      // Log when a drop is created
      console.log("drop");

      // Remove the drop after the animation ends
      drop.addEventListener('animationend', () => {
        drop.remove();
      });
    };

    // Create a new drop every 2 seconds
    const interval = setInterval(createDrop, 2000);

    // Cleanup interval on component unmount
    return () => {
      console.log('Cleaning up interval');
      clearInterval(interval);
    };
  }, []);

  console.log('Blood component rendered');
  return null;
};

export default Blood;