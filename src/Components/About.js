import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import me from '../Assets/image.webp';
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
          <h2 align="left">Jade Therras</h2>
          Biomedical engineer <br/><br/>
             Hi, welcome to my portfolio !<br/><br/>
              I'm a polyvalent engineer driven by the desire to contribute humbly and positively to the world. <br/><br/>
              I believe that everyone should have a chance to live as they want, which is why I've developed a strong interest in rehabilitation, prosthetics, and neuroscience.
              In particular, I'm passionate about assistive technology. 
                          <br/><br/>
              Apart from medical devices, I have a strong background in programming for software, web and mobile development, as well as machine learning and data analysis. 
              I have completed a bachelor in Biotechnology and a master in Neuro-engineering at EPFL.<br/><br/>
              I'm now looking for a first job that aligns with my values. I'm determined and have a lot of energy! <br/><br/>
              I also love to share and teach, at least as much as I love to learn.<br/>
              My values are curiosity, polyvalence and honesty.
                          <br/><br/>
              You will find a selection of past projects below.
                          <br/><br/>
              Best<br/>
              Jade
          </p>  
        </Col>
      </Row>
    </Container>
  );
}

export default About;