import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';

import { FaLongArrowAltRight } from "react-icons/fa";


import walker from "./walker.jpeg"
import concept from "./concept.jpeg"
import Video from "./show.MOV"


import SUP from '../../../SUP';
import {PiPresentationChart, CgWebsite} from "../../../icons";


const Walker = () => {

  const docu = "https://github.com/fredericloboda/GoFast_Walker-HackaHealth_EPFL2025"
  const HH = "https://www.hackahealth.ch/"

  return (
        <Card
        title= {<div align = "left">GoFast : A rollator <br/>allowing upper <br/>body movement</div>}
        bodyText="Adapting a rollator to promote asynchronous movement of the arms, promoting movement and rehabilitation"
        linkText="Learn More"
        cardContent={<div>
            
            <br/>
            <h3 align="left">A bit of context : the HackaHealth Hackathon</h3>
            <p align="left">
              Each year, the hackahealth association organize a hackathon where makers, engineers, 
              designers work, play, and get together with people with disabilities to develop personalized 
              solutions that can improve their daily living. <br/> 
            </p>
            <h3 align="left">Challenger</h3>
            <p align="left">
              Our challenger had a small brain injury in the past, impairing his balance and coordination. 
              He use a walker in his daily life. However, it constraint his upper body movement. 
              He wanted a solution to promote the natural movement of the upper body, especially promoting
              asynchronous movement, while still having support and stability from the walker. This could
              be a game changer for his rehabilitation and general mobility.
              </p>
            <h3 align="left">Final solution</h3>
            <p align="left">
              Starting from an old walker, we developed a simple system to allow asynchronous arm movement. The two arms 
              can't move in the same direction at the same time, and moving in one direction will make the other arm move. 
              The final arm movement is similar to the use of walking stick, while keeping the support of the walker ! In fact, 
              the prototype have brakes, and a custom range of motion of the arms to adapt to the patient needs.
            </p>
          <video id="bannerVideo" alt="video prototype in use" width="50%" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
          <Col className="d-flex justify-content-center">
          <Row className="align-items-center justify-content-md-center gap-3 w-100">
            <Col xs={5} className="d-flex justify-content-center">
              <Image
                src={concept}
                alt="concept"
                width="75%"
                rounded
                fluid
                className="position-relative z-index-1"
              />
            </Col>

            <Col xs="auto" className="d-flex align-items-center justify-content-center">
              <FaLongArrowAltRight style={{ fontSize: '3rem' }} />
            </Col>

            <Col xs={5} className="d-flex justify-content-center">
              <Image
                src={walker}
                alt="prototype"
                width="75%"
                rounded
                fluid
                className="position-relative z-index-1"
              />
            </Col>
          </Row>
        </Col>
          <p align="center">From the first concept to the final prototype : 3 days of hard work !</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(docu)}><span class="text"><PiPresentationChart />Project's documentation</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(HH)}><span class="text"><CgWebsite />See HackaHealth</span></button><br/> 
                </div>
                </div>
          }
        backgroundImage={walker}
        time="10-12 oct 2025"
        type="Hackathon"
      />
  );
}

export default Walker;