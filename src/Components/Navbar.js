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


const Header = () => {

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
            <Nav.Link href="#About">Jade Therras</Nav.Link>
            <Nav.Link href="#Showcase">Showcase</Nav.Link>
            <div ref={ref}>
              <Nav.Link onClick={handleClick}>CV</Nav.Link>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
              <Popover id="popover-contained">
              <Popover.Body>
                <Row>
                <Col onClick={() =>window.open(cven)}><span className='langage'>English</span></Col>
                <Col onClick={() =>window.open(cvfr)}><span className='langage'>Français</span></Col>
                </Row>
              </Popover.Body>
              </Popover>
              </Overlay>
            </div>
            <Nav.Link onClick={() =>window.open("https://github.com/jadetherras")}>Github</Nav.Link>
            <Nav.Link href="#Contacts">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;