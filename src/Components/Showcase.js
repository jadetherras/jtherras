import React, { useState, useRef } from 'react';
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

import Bacteria from '../Animation/Bacteria';
import Lantern from '../Animation/Lantern/Lantern';
import TheRocket from '../Animation/Rocket/rocket';
import Rain from '../Animation/rain/rain';


import Separator from './separator';
const Showcase = ({Animation}) => {
  const [isIGEMExpanded, setIsIGEMExpanded] = useState(false);
  const [isVRExpanded, setIsVRExpanded] = useState(false);
  const [isRocketExpanded, setIsRocketExpanded] = useState(false);
  const [isRaining, setIsRaining] = useState(false);

  return (
    <Container>
    {Animation && isRaining && <Rain/>}
    {Animation && isRocketExpanded && <TheRocket/>}
    {Animation && isVRExpanded &&
      <><Lantern/><Lantern/><Lantern/><Lantern/><Lantern/></>}
      {Animation && isIGEMExpanded && <><Bacteria />
      <Bacteria /><Bacteria /><Bacteria /><Bacteria /></>}
      <h1>Projects</h1>&nbsp;


        <Col align="justify-content-md-center"> 
         
          <Box class="highlight" >
          <h1>Highlight</h1>&nbsp;
          <Row className="d-flex justify-content-center gap-3">
          <Helpie />
        <IGEM setIsIGEMExpanded={setIsIGEMExpanded} />
        <NeuralInterface />
        </Row>
          </Box>

          <Separator Text="Rehabilitation and neurosciences"/>
          <Row className="d-flex justify-content-center gap-3">
            <Ossur/>
            <Haptic />
            <TNE />
            <NeuralInterface />
            </Row>

            <Separator Text="Machine Learning"/>
            <Row className="d-flex justify-content-center gap-3">
              <LAPD setIsLAPDExpanded={setIsRaining}/>
              <Parapully setIsPPExpanded={setIsRaining}/>
            </Row>

            <Separator Text="Associative and MAKE projects"/>
            <Row className="d-flex justify-content-center gap-3">
            <Helpie />
            <IGEM setIsIGEMExpanded={setIsIGEMExpanded} />
            <Rocket setIsRocketExpanded={setIsRocketExpanded} />
            </Row>

            <Separator Text="Other projects"/>
            <Row className="d-flex justify-content-center gap-3">
            <JumpingRobot />
            <VR setIsVRExpanded={setIsVRExpanded} />
            <Bachelor />
            </Row>
        
        
        
        
        </Col>
    </Container>
  );
}

export default Showcase;