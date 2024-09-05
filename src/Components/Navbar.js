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
    const onCVClick = () => {
    const pdfUrl = "https://fr.overleaf.com/download/project/657c7a8d68a920a86cdf0f4e/build/191c2312967-09a88ec35c54e52f/output/output.pdf?compileGroup=priority&clsiserverid=clsi-pre-emp-c2d-d-f-8rxf&enable_pdf_caching=true&popupDownload=true";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark" sticky="top" >
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#About">Jade Therras</Nav.Link>
            <Nav.Link href="#Showcase">Showcase</Nav.Link>
            <Nav.Link onClick={onCVClick}>CV</Nav.Link>
            <Nav.Link href="https://github.com/jadetherras">Github</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;