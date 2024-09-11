import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import '../Style.css';
import { Col,Row } from 'react-bootstrap';
import cvfr from "../Assets/CVfr.pdf";
import cven from "../Assets/CVen.pdf";
import './Navbar.css';


const Footer = () => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark" sticky="top" >
        <Container>
        <Nav className="mx-auto">
        <Nav.Link >Website by Jade Therras</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;