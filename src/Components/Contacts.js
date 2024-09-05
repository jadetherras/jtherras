import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "../Style.css";
import Button from 'react-bootstrap/Button';
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";


const Contacts = () => {
    const linkedin = "https://www.linkedin.com/in/jade-therras-873a08206/"
    const email = "mailto:jade.therras@epfl.ch"
    const tel = "tel:+33658814083"
    return (
    <Container className="my-5 mx-10">
        <h1>Contacts</h1>&nbsp;
      <Row className="justify-content-md-center gap-3">
        <Col> 
        <Button variant="primary" onClick={() =>window.open(tel)}>
            <IoIosPhonePortrait />&nbsp;
            +33 6 58 81 40 83
        </Button>
        </Col>
        <Col>
        <Button variant="primary" onClick={() =>window.open(email)}>
            <TfiEmail />&nbsp;
            jade.therras@epfl.ch
        </Button>
        </Col>
        <Col> 
        <Button variant="primary" href={linkedin}>
                <FaLinkedin />&nbsp;
                jade therras
        </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;