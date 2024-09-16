import React, { useState, useRef, useLayoutEffect } from 'react';
import './separator.css';

const Separator = ({ Text = '', children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const panelRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  // Update height based on content size
  const updateHeight = () => {
    if (panelRef.current && contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  };

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => updateHeight());

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // Clean up on component unmount
    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    updateHeight(); // Update height when the panel opens or closes
  }, [isOpen, children]); // Depend on children to update height when content changes

  return (
    <div className="spacer">
      <div className="separator-header" onClick={toggleAccordion}>
        <div className="separator-text">{Text}</div>
        <div className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</div>
      </div>
      <div
        className="accordion-panel"
        style={{ height }}
        ref={panelRef}
      >
        <div ref={contentRef}>
          {children}
        </div>
       
      </div>
      <div className="mask"></div>
    </div>
  );
};

export default Separator;
