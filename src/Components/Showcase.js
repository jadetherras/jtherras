import React, { useState, useEffect } from 'react';
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

import Bacteria from '../Animation/Bacteria';
import Lantern from '../Animation/Lantern/Lantern';
import TheRocket from '../Animation/Rocket/rocket';
import Ossur from './Projects/Ossur/Ossur';


const Showcase = () => {
  const [isIGEMExpanded, setIsIGEMExpanded] = useState(false);
  const [isVRExpanded, setIsVRExpanded] = useState(false);
  const [isRocketExpanded, setIsRocketExpanded] = useState(false);

  return (
    <Container className="my-5 mx-10 ">
      {isRocketExpanded && <TheRocket/>}
    {isVRExpanded &&
      <><Lantern/><Lantern/><Lantern/><Lantern/><Lantern/></>}
      {isIGEMExpanded && <><Bacteria />
      <Bacteria /><Bacteria /><Bacteria /><Bacteria /></>}
      <h1>Projects</h1>&nbsp;
        <Col align="justify-content-md-center"> 
          <Box class="highlight" >
          <h1>Highlight</h1>&nbsp;
          <Row className="justify-content-md-center gap-3">
          <Helpie />
        <IGEM isIGEMExpanded={isIGEMExpanded} setIsIGEMExpanded={setIsIGEMExpanded} />
        <NeuralInterface />
        </Row>
          </Box>
          <br/><br/>
          <Row className="justify-content-md-center gap-3">
            <Ossur/>
          <Haptic />
        <TNE />
        <LAPD />
        <VR isVRExpanded={isVRExpanded} setIsVRExpanded={setIsVRExpanded} />
        <JumpingRobot />
       <Bachelor />
        <Rocket isRocketExpanded={isRocketExpanded} setIsRocketExpanded={setIsRocketExpanded} />
        <Parapully />
        </Row>
        </Col>
    </Container>
  );
}

export default Showcase;