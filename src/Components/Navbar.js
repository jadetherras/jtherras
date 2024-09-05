/*import React from 'react'

const Navbar = () => {
  return (
    <div className='home-container'>Navbar</div>
  )
}

export default Navbar*/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Style.css';

const Header = () => {
  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark" >
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Jade Therras</Nav.Link>
            <Nav.Link href="#showcase">Showcase</Nav.Link>
            <Nav.Link href="cv">CV</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;