import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";
import { Image } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "./logo.png"
import total from "./total knee.png"
import mauch from "./mauch.png"
import feet from "./pro-flex modular.PNG"
import { CgWebsite } from "react-icons/cg";



const Ossur = () => {
  const ossur = "https://www.ossur.com/de-ch"
  
  return (
         <Card
        title="Össur - internship"
        bodyText="R&D biomechanical solution - knee and foot prosthesis"
        linkText="Learn More"
        cardContent={<div>
          <h3 align="left">Össur </h3>
          <p align="left">
          Össur is a company based in Iceland that develops, 
          manufactures and sells non-invasive equipment for orthopaedics, 
          including bracing and support products, compression therapy, and prosthetics. <br/>
          I had the incredible opportunity to do a 6 months internship in the R&D biomechanical solution department 
          of Össur. 
         </p>
         <h3 align="left">Internship subject </h3>
          <p align="left">
            My main goal was to improve a hydraulic knee prototype using a carbon spring, starting from Mauch knee. 
            Along other project, I worked on a small test for a piece on total knee. I also worked on a friction test, and 
            created a user friendly interface with python. Finally I worked on a new pyramid fixture for the pro-flex modular feet. 
            <br/>
            I worked with solidWork (modelling and stress simulation), 3D printing, prototyping, python. 
          </p>
           <Col align="justify-content-md-center"> 
          <Row className="justify-content-md-center gap-3">
            <Col>
          <Image src={total} alt="total"  width="100%" rounded fluid className="position-relative z-index-1" />
          </Col><Col>
          <Image src={feet} alt="team" width="100%" rounded fluid className="position-relative z-index-1" />
          
          </Col>
          <Col>
          <Image src={mauch} alt="mauch" width="100%" rounded fluid className="position-relative z-index-1" />
          
          </Col>
          </Row>
          </Col>
                <p>Total knee - proflex modular - mauch knee</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(ossur)}><span class="text"><CgWebsite />Visit Össur website</span></button><br/>
                 </div>
                </div>
          }
        backgroundImage={logo}
      />
  );
}

export default Ossur;