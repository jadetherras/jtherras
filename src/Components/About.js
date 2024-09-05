import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import me from '../Assets/image.png';
import "../Style.css";

const About = () => {
  return (
    <Container className="my-5 mx-10">
      <Row>
        <Col xs={12} md={4} className="position-relative">  
          <Image src={me} alt="Responsive image" roundedCircle fluid className="position-relative z-index-1" />
          <div className="circle position-absolute bottom-0 start-0 z-index-0"></div>
        </Col>
        <Col xs={12} md={8}  className="text-start">  
          <h2>About Me</h2> 
          <p>
            Hi ! I'm Jade. I'm a student at EPFL, currently finishing a master degree in neurotechnology.
            I'm highly interested in assistive technology. 
          </p>  
        </Col>
      </Row>
    </Container>
  );
}

export default About;