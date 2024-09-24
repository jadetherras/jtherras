import React, { useState, useRef, useEffect} from 'react';
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

import Bacteria from '../Animation/Bacteria';
import Lantern from '../Animation/Lantern/Lantern';
import TheRocket from '../Animation/Rocket/rocket';
import Rain from '../Animation/rain/rain';

import Separator from './separator';

const Showcase = ({ Animation }) => {
  const [isIGEMExpanded, setIsIGEMExpanded] = useState(false);
  const [isRocketExpanded, setIsRocketExpanded] = useState(false);
  const [isRaining, setIsRaining] = useState(false);

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

  /*useEffect(() => {
    if (totalCount != 0 && lanternCount === totalCount) {
      document.getElementById("major-lantern").scrollIntoView({ behavior: "smooth" });
    }
  }, [lanternCount, totalCount]);*/

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

          {/*{/* Conditionally render the MAJOR lantern only when all other lanterns are found *
          {totalCount !=0 && lanternCount === totalCount && (
            <>
            {console.log("MAJOR Lantern created")}
            <Lantern onCountChange={handleLanternCountChange} major={true} id="major-lantern" />
            </>
          )}*/}
        </>
      )}
      <h1>Projects</h1>&nbsp;

      <Col align="justify-content-md-center">
        <Box className="highlight">
          <h1>Highlight</h1>&nbsp;
          <Row className="d-flex justify-content-center gap-3">
            <Helpie />
            <IGEM setIsIGEMExpanded={setIsIGEMExpanded} />
            <NeuralInterface />
          </Row>
        </Box>

        <Separator
         ref={separatorRefs[0]}
         OnToggle={() => handleToggle(0)}
          Text="Rehabilitation and neurosciences"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
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
          Text="Machine Learning"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
              <LAPD setIsLAPDExpanded={setIsRaining} />
              <Parapully setIsPPExpanded={setIsRaining} />
              <div /><div />
            </Row>
          }
        />

        <Separator
          ref={separatorRefs[2]}
          OnToggle={() => handleToggle(2)}
          Text="Associative and MAKE projects"
          children={
            <Row className="d-flex justify-content-center gap-3">
              <div /><div />
              <Helpie />
              <IGEM setIsIGEMExpanded={setIsIGEMExpanded} />
              <Rocket setIsRocketExpanded={setIsRocketExpanded} />
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
              <LCA />
              <VR setIsVRExpanded={setIsVRExpanded}
              foundCount = {lanternCount}
              totalCount = {totalCount}
                />
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