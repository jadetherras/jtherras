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
import "./button.css";


const Contacts = () => {
    const linkedin = "https://www.linkedin.com/in/jade-therras-873a08206/"
    const email = "mailto:jade.therras@epfl.ch"
    const tel = "tel:+33658814083"
    return (
    <Container className="my-5 mx-10">
        <h1>Contact</h1>&nbsp;
        
        <Row className="justify-content-md-center gap-3">
          <Col>
      <button class="button-48" role="button" 
        onClick={() =>window.open(tel)}
        ><span class="text"><IoIosPhonePortrait />&nbsp;
        +33 6 58 81 40 83</span></button>
        </Col><Col>
        <button class="button-48" role="button" 
        onClick={() =>window.open(email)}
        ><span class="text"><TfiEmail />&nbsp;
            jade.therras@epfl.ch</span></button>
            </Col><Col>
        <button class="button-48" role="button" 
        onClick={() =>window.open(linkedin)}
        ><span class="text"><FaLinkedin />&nbsp;
                Jade Therras</span></button>
                </Col>
      </Row>

    </Container>
  );
}

export default Contacts;