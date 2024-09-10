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

import Background from './Background';

const Showcase = () => {
  const [isIGEMExpanded, setIsIGEMExpanded] = useState(false);

  return (
    <Container className="my-5 mx-10 ">
      {isIGEMExpanded && <><Background />
      <Background /><Background /><Background /><Background /></>}
      <h1>Projects</h1>&nbsp;
        <Col align="justify-content-md-center"> 
          <Box class="highlight" style={{zIndex: 2}}>
          <h1>Highlight</h1>&nbsp;
          <Row className="justify-content-md-center gap-3">
          <Helpie style={{zIndex: 2}}/>
        <IGEM isIGEMExpanded={isIGEMExpanded} setIsIGEMExpanded={setIsIGEMExpanded} style={{zIndex: 2}}/>
        <NeuralInterface style={{zIndex: 2}}/>
        </Row>
          </Box>
          <br/><br/>
          <Row className="justify-content-md-center gap-3">
          <JumpingRobot style={{zIndex: 2}}/>
        <TNE style={{zIndex: 2}}/>
        <LAPD style={{zIndex: 2}}/>
        <VR style={{zIndex: 2}}/>
        <Bachelor style={{zIndex: 2}}/>
        <Parapully style={{zIndex: 2}}/>
        <Haptic style={{zIndex: 2}}/>
        </Row>
        </Col>
    </Container>
  );
}

export default Showcase;