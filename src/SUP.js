import React, { useState, useRef } from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import zIndex from '@mui/material/styles/zIndex';


const SUP = ({ID="id"}) => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
    
    const handleMouseEnter = () => {
      setShow(true);
      setTarget(ref.current);
    };
  
    const handleMouseLeave = () => {
      setShow(false);
    };

    const TextID = () => {
        switch (ID) {
        case "EMG":
            return "Electromyography (EMG) : Technique for evaluating and recording the electrical activity produced by skeletal muscles."
        case "BCI":
            return "Brain-computer interface (BCI) : Computer-based system that acquires brain signals, analyzes them, and translates them into commands (for example to control a prosthesis)."
        case "GHI":
            return "Global Horizontal Irradiance (GHI) : Total amount of solar energy received per square meter on a horizontal surface."
        case "CNN":
            return "Convolutional neural network (CNN) : Category of machine learning model well suited to analyzing visual data."
        case "LSTM":
            return "Long short-term memory (LSTM) : Category of machine learning model, can detain long-term dependencies."
        case "TDA":
            return "Topological data analysis (TDA) : Method for analyzing the shape and structure of data using concepts from topology. It helps find patterns, clusters, and relationships in complex datasets."
        default :
            return "definition here"
        }
    }

    return (
        <a ref={ref} onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} >
        <sup><FaQuestionCircle /></sup>
        <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
              <Popover id="popover-contained" style={{ zIndex: 9999 }}>
              <Popover.Body>
                {TextID()}
              </Popover.Body>
              </Popover>
              </Overlay>
              </a>
    )
}

export default SUP