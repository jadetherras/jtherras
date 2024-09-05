import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Style.css";
import Card from './card';
import me from '../Assets/image.png';
import Button from 'react-bootstrap/Button';

/*
function BasicExample() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={me} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}*/


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