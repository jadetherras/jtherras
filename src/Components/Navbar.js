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
import T from "../Assets/transcript.pdf"
import './Navbar.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
        track: {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }
      },
    },
  },
});

const Header = ({setANIM}) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    const [show2, setShow2] = useState(false);
    const [target2, setTarget2] = useState(null);
    const ref2 = useRef(null);
    
    const handleMouseEnter = () => {
      setShow2(true);
      setTarget2(ref2.current);
    };
  
    const handleMouseLeave = () => {
        setShow2(false);
        setShow(false);
    };

    const handleSwitchChange = (event) => {
      setANIM(event.target.checked);
    };

  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark" sticky="top" >
        <Container className="position-relative d-flex align-items-center justify-content-between">
          
          <Nav className="position-absolute start-50 translate-middle-x">
          <div ref={ref}>
              <a class = "link" onClick={handleClick}>Resume</a>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
              <Popover id="popover-contained" onMouseLeave={handleMouseLeave} >
              <Popover.Body>
                <Row>
                <Col onClick={() =>window.open(cven)}><span className='langage'>English</span></Col>
                <Col onClick={() =>window.open(cvfr)}><span className='langage'>Français</span></Col>
                </Row>
              </Popover.Body>
              </Popover>
              </Overlay>
            </div>
            <a class = "link" href="#About">About </a>
            <a class = "link" href="#Showcase">Showcase </a>
            <a class = "link" href="#Contacts">Contact </a>
            <a class = "link" onClick={() =>window.open("https://github.com/jadetherras")}>Github</a>
            <a class = "link" onClick={() =>window.open(T)}>Transcript</a>
          </Nav>
          <div ref={ref2} className="d-flex align-items-center ms-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
              <div className="anim-text" >Animation</div>
              <Overlay
                show={show2}
                target={target2}
                placement="bottom"
                container={ref2}
                containerPadding={20}
              >
              <Popover id="popover-contained" style={{ position: 'absolute' }}>
              <Popover.Body>
                Fun animations appear for some projects ! You can deactivate them if needed
              </Popover.Body>
              </Popover>
              </Overlay>
              <ThemeProvider theme={theme}>
                        <Switch defaultChecked onChange={handleSwitchChange} />
                        </ThemeProvider>
                    </div>
                    <div ref={ref}>
              
            </div>
          </Container>
      </Navbar>
      
      
    </>
  );
}

export default Header;