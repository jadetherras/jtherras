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
      <div className="navbar-text">
    <p>Website by Jade Therras</p>
  </div>
    </>
  );
}

export default Footer;