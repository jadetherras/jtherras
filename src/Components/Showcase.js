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


const Showcase = () => {
  return (
    <Container className="my-5 mx-10 ">
      <h1>Projects</h1>&nbsp;
        <Col> 
        <Row className="justify-content-md-center gap-3">
        <Helpie/>
        <IGEM/>
        <JumpingRobot/>
        <NeuralInterface/>
        <LAPD/>
        <Bachelor/>
        <TNE/>
        
        </Row>
        </Col>
    </Container>
  );
}

export default Showcase;