import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Style.css";

import Helpie from './Projects/Helpie/Helpie';


const Showcase = () => {
  return (
    <Container className="my-5 mx-10 ">
      <h1>Projects</h1>&nbsp;
        <Col> 
        <Row className="justify-content-md-center gap-3">
        <Helpie/>
        </Row>
        </Col>
    </Container>
  );
}

export default Showcase;