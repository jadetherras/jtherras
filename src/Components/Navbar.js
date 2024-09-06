import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import '../Style.css';
import { Col,Row } from 'react-bootstrap';
import cvfr from "../Assets/CVfr.pdf";
import cven from "../Assets/CVen.pdf";


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
                <Col onClick={() =>window.open(cven)}><strong>English</strong></Col>
                <Col onClick={() =>window.open(cvfr)}><strong>Français</strong></Col>
                </Row>
              </Popover.Body>
              </Popover>
              </Overlay>
            </div>
            <Nav.Link onClick={() =>window.open("https://github.com/jadetherras")}>Github</Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;