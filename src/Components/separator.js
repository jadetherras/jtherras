import React, { useState, useRef, useLayoutEffect, useImperativeHandle, forwardRef } from 'react';
import './separator.css';

const empty = () => {};
const Separator = forwardRef(({ Text = '', children, OnToggle = empty}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const panelRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAccordion = (type) => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const getOpen = () => {
    return isOpen;
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

    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    updateHeight(); // Update height when the panel opens or closes
  }, [isOpen, children]); // Depend on children to update height when content changes

  useImperativeHandle(ref, () => ({
    toggleAccordion,
    getOpen
  }));

  return (
    <div className="spacer">
      <div className="separator-header" onClick={OnToggle}>
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
});

export default Separator;
