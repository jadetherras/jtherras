import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';

import couv from "./couv.jpg"
import report from "./Neural_interface___rendu.pdf"
import prop from "./First_draft.pdf"

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";
import { ImLab } from "react-icons/im";

import Img1 from "./photo groupe 1.jpg"
import Img2 from "./photo groupe 2.jpg"

const NeuralInterface = () => {
  const course="https://edu.epfl.ch/coursebook/en/neural-interfaces-NX-422"

  return (
        <Card
        title="wearable EMG"
        bodyText="a wireless active flexible microneedle-array-electrode system for long-term recording of EMG signals in part of a closed-loop neurorehabilitation feedback system"
        linkText="Learn More"
        cardContent={<div>
            
            <br/>
            <h3 align="left">A bit of context</h3>
            <p align="left">
              The neural interface master course of EPFL propose a projet : Look into 
              neural interface state of the art product and propose a way to improve the product. <br/>
              During the Hackathealth'hackaton 2022, , a project involved a child with incomplete tetraplegia and proprioception limitation resulting 
              from a meningitis infection as a baby. The project was to develop a game with closed-loop feedback system, using muscle activity signal (EMG) recording to help him engage in rehabilitation.  
              The current system used for physiotherapy sessions are electrodes coupled with an Arduino. <br/><br/>
              This project aimed to improve the system. Namely, improve EMG recording quality, reduce the number of connectors and implement long term usage, so that Laura can wear the device daily.
            </p>
            <h3 align="left">Product proposition and developpement</h3>
            <p align="left">
              We suggested and developped a wireless active flexible microneedle-array-electrode system, suitable for long-term recording
              of muscle activity signals that improves the recording and filtering part. For that we first
              established the requirements for our new device and we came up with an innovative solutions
              that combine elements of existing literature, including biomedical studies on ECG recordings.<br/>
              Both the electrode, the electronics and the product were designed, resulting in a comprehensive device.
            </p>
          <h3 align="left">Following work </h3>
          <p align="left">
            We had the opportunity to continue working on the project in collaboration with the patient therapics. We then worked mainly on data analysis of the past
            EMG recordings, in order to support a funding demand.
          </p>
          <Col align="justify-content-md-center"> 
          <Row className="justify-content-md-center gap-3">
            <Col>
          <Image src={Img1} alt="team"  width="100%" rounded fluid className="position-relative z-index-1" />
          </Col><Col>
          <Image src={Img2} alt="team" width="100%" rounded fluid className="position-relative z-index-1" />
          </Col>
          </Row>
          </Col>
          <p align="center">The team, with precious boards !</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(prop)}><span class="text"><FaFileAlt />See project proposition report</span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See final project report</span></button><br/>  
                <button class="button-48" role="button"><span class="text"><ImLab />See hosting lab</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={couv}
      />
  );
}

export default NeuralInterface;