import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import me from '../Assets/image.png';
import "../Style.css";
import "./About.css";

const About = () => {
  return (
    <Container className="my-5 mx-10">
      <Row>
        <Col xs={12} md={4} className="position-relative">  
          <Image src={me} alt="Responsive image" roundedCircle fluid className="position-relative z-index-1 me" />
          
        </Col>
        <Col xs={12} md={8}  className="text-start">  
          <h2>About Me</h2> 
          <p>
            Hi ! I'm Jade. <br/>
            <br/>
            I'm a student at EPFL. I did a bachelor in life sciences ingenieuring, and I'm currently finishing a master degree in neurotechnology.<br/>
            I'm highly interested in assistive technology, as well as education and prototyping.<br/>
            <br/>
            You will find below a collection of past projects.
          </p>  
        </Col>
      </Row>
    </Container>
  );
}

export default About;