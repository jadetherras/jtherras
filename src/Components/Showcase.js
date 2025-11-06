import React, { useState, useRef} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Style.css";

import Helpie from './Projects/Helpie/Helpie';
import JumpingRobot from './Projects/JumpingRobot/JumpingRobot';
import NeuralInterface from './Projects/NeuralInterface/NeuralInterface';
import LAPD from './Projects/ML/LAPD';
import Bachelor from './Projects/Bachelor/bachelor';
import TNE from './Projects/TNE/TNE';
import IGEM from './Projects/IGEM/IGEM';
import { Box } from '@mui/material';
import VR from './Projects/VR/VR';
import Parapully from './Projects/Parapully/parapully';
import Haptic from './Projects/HapticEMG/Haptic';
import Rocket from './Projects/RocketTeam/Rocket';
import Ossur from './Projects/Ossur/Ossur';
import LCA from './Projects/LCA/LCA';
import Locomotion from './Projects/Locomotion/Locomotion';
import BL from './Projects/Brainlike/BrainLike';
import ADA from './Projects/ADA/ADA';
import Walker from './Projects/Walker/walker';
import Thesis from './Projects/Thesis/Thesis';

import Bacteria from '../Animation/Bacteria';
import Lantern from '../Animation/Lantern/Lantern';
import TheRocket from '../Animation/Rocket/rocket';
import Rain from '../Animation/rain/rain';
import Blood from '../Animation/Blood/blood';


import Separator from './separator';

const Showcase = ({ Animation }) => {
  const [isIGEMExpanded, setIsIGEMExpanded] = useState(false);
  const [isRocketExpanded, setIsRocketExpanded] = useState(false);
  const [isRaining, setIsRaining] = useState(false);

  const [isADAExpanded, setIsADAExpanded] = useState(false); 
  const [isRed, setRed] = useState(false); 

  const [isVRExpanded, setIsVRExpanded] = useState(false);
  
  const [lanternCount, setLanternCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const separatorRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {

    if (separatorRefs[index].current) {
      if (openIndex !== null) {
        if (openIndex === index) {
          separatorRefs[index].current.toggleAccordion();
          setOpenIndex(null)
        } else {
          separatorRefs[openIndex].current.toggleAccordion();
          separatorRefs[index].current.toggleAccordion();
          separatorRefs[index].current.scrollIntoView();
          setOpenIndex(index)
        }
      } else {
        separatorRefs[index].current.toggleAccordion();
        separatorRefs[index].current.scrollIntoView();
        setOpenIndex(index)
      }
    }
  };

  const handleLanternCountChange = (newLanternCount, newTotalCount) => {
    setLanternCount(newLanternCount);
    setTotalCount(newTotalCount);
  };


  const switchColor = (color) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color',color);
    setRed(!isRed);
  };

  return (
    <Container>
      {Animation && isRaining && <Rain />}
      {Animation && isRocketExpanded && <TheRocket />}
      {Animation && isIGEMExpanded && <>
      <Bacteria />
      <Bacteria />
      <Bacteria />
      <Bacteria />
      <Bacteria /></>}
      {Animation && isVRExpanded && (
        <>
          {/* Render the normal lanterns */}
          <Lantern onCountChange={handleLanternCountChange} />
          <Lantern onCountChange={handleLanternCountChange} />
          <Lantern onCountChange={handleLanternCountChange} />
          <Lantern onCountChange={handleLanternCountChange} />
          <Lantern onCountChange={handleLanternCountChange} />
        </>
      )}

      {Animation && isADAExpanded && <Blood />}
      
      {Animation && !isRed && isADAExpanded && switchColor('#780202') && <Blood />}
      {Animation && isRed && !isADAExpanded && switchColor('#db5c13')}
      

      <h1>Projects</h1>&nbsp;

      <Col align="justify-content-md-center">
        <Box className="highlight">
          <h1>Highlight</h1>&nbsp;
          <Row className="d-flex justify-content-center gap-3">
            <Helpie />
            <Thesis />
            <IGEM setIsIGEMExpanded={setIsIGEMExpanded} />
            <VR setIsVRExpanded={setIsVRExpanded}
              foundCount = {lanternCount}
              totalCount = {totalCount}
                />
          </Row>
        </Box>

        <Separator
         ref={separatorRefs[0]}
         OnToggle={() => handleToggle(0)}
          Text="Rehabilitation & neurosciences"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
              <Thesis />
              <Walker />
              <Ossur />
              <Haptic />
              <NeuralInterface />
              <TNE />
              <Locomotion />
              <div /><div />
            </Row>
          }
        />

        <Separator
          ref={separatorRefs[1]}
          OnToggle={() => handleToggle(1)}
          Text="Machine Learning & Data analysis"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
              <ADA setIsADAExpanded={setIsADAExpanded}/>
              <LAPD setIsLAPDExpanded={setIsRaining} />
              <BL/>
              <Parapully setIsPPExpanded={setIsRaining} />

              <div /><div />
            </Row>
          }
        />

        <Separator
          ref={separatorRefs[2]}
          OnToggle={() => handleToggle(2)}
          Text="Software & mobile development"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
              <Helpie />
              <IGEM setIsIGEMExpanded={setIsIGEMExpanded} />
              <VR setIsVRExpanded={setIsVRExpanded}
              foundCount = {lanternCount}
              totalCount = {totalCount}
                />
              <div /><div />
            </Row>
          }
        />

        <Separator
          ref={separatorRefs[3]}
          OnToggle={() => handleToggle(3)}
          Text="Other projects"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
              <JumpingRobot />
              <Rocket setIsRocketExpanded={setIsRocketExpanded} />
              <LCA />
              <Bachelor />
              <div /><div />
            </Row>
          }
        />
      </Col>
    </Container>
  );
};

export default Showcase;