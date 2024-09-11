import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Style.css';
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
      <Navbar className='navbar' data-bs-theme="dark">
        <Container>
        <Nav className="mx-auto">
        <Nav.Link href="#About" >Website by Jade Therras</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="navbar-text">
    <p>Build with React, homemade graphical assets and animations</p>
  </div>
    </>
  );
}

export default Footer;