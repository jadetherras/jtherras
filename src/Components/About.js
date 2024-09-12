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
          <Image style={{zIndex: 2}} src={me} alt="Responsive image" roundedCircle fluid className="position-relative z-index-1 me" />
          
        </Col>
        <Col xs={12} md={8}  className="text-start">  
          <h2>About Me</h2> 
          <p>
            Hi ! I'm Jade Therras. <br/>
            I have always wanted to understand how living individuals work, and aimed to have a, humble, good contribution to the world. 
            I believe that everyone should have a chance to live as he want, and have been quickly interested in rehabilitation, prosthesis and neursciences. 
            Particularly, I'm passionate about assistive technology. <br/>

            Currently finishing a Master of Neurotechnology at EPFL, after a life sciences bachelor's degree in the same university, I'm now searching for a challenging master 
            project. <br/>
            I'm determined and have a lot of energy ! I also love to share and teach, at least as much as I love to learn. <br/>
            My values? Curiosity,
polyvalence and courage
            <br/>
            You will find below a selection of past projects.
          </p>  
        </Col>
      </Row>
    </Container>
  );
}

export default About;