import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Style.css";
import Card from './card';
import me from '../Assets/image.png';
import Button from 'react-bootstrap/Button';


const Showcase = () => {
  return (
    <Container className="my-5 mx-10 ">
        <Col> 
        <Row className="justify-content-md-center gap-3">
        <Card
            title="Something Awesome"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
            linkText="Learn More"
            linkHref="#"
          />
          <Card
            title="Something Awesome"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
            linkText="Learn More"
            linkHref="#"
          />
          <Card
            title="Something Awesome"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
            linkText="Learn More"
            linkHref="#"
          />
        </Row>
        </Col>
    </Container>
  );
}

export default Showcase;