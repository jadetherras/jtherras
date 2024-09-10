import React from 'react'
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


const Showcase = () => {
  return (
    <Container className="my-5 mx-10 ">
      <h1>Projects</h1>&nbsp;
        <Col align="justify-content-md-center"> 
          <Box class="highlight">
          <h1>Highlight</h1>&nbsp;
          <Row className="justify-content-md-center gap-3">
          <Helpie/>
        <IGEM/>
        <NeuralInterface/>
        </Row>
          </Box>
          <br/><br/>
          <Row className="justify-content-md-center gap-3">
          <JumpingRobot/>
        
        <TNE/>
        <LAPD/>
        <VR/>
        <Bachelor/>
        </Row>
        </Col>
    </Container>
  );
}

export default Showcase;