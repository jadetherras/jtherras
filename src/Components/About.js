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
      <Row className="d-flex align-items-stretch">
        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">  
          <Image style={{zIndex: 2}} src={me} alt="Responsive image" roundedCircle fluid className="position-relative z-index-1 me" />
        </Col>
        <Col xs={12} md={8}  className="d-flex align-items-center justify-content-center">  
          <p align="left">
          <h2 align="left">About Me</h2><br/>
            Hi ! I'm Jade Therras. <br/><br/>
            I've always been driven by a desire to understand living beings and contribute humbly and positively to the world. <br/>
            I believe that everyone should have a chance to live as they want, which is why I've developed a strong interest in rehabilitation, prosthetics, and neuroscience. 
            In particular, I'm passionate about assistive technology. <br/><br/>
            Currently finishing a Master in Neuro-technology at École Polytechnique Fédérale de Lausanne (EPFL), after a life sciences Bachelor's degree in the same university, I'm now searching for a challenging 6 months master 
            thesis starting in february/march. <br/><br/>
            I'm determined and have a lot of energy ! I also love to share and teach, at least as much as I love to learn. <br/>
            My values are curiosity, polyvalence and honesty.
            <br/><br/>
            You will find below a selection of past projects.
          </p>  
        </Col>
      </Row>
    </Container>
  );
}

export default About;