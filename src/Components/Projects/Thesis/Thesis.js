import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';

import { FaLongArrowAltRight } from "react-icons/fa";


//import am from "./4AM.jpeg"
//import LAB from "./LAB.jpeg"
import Lesgo from "./LESGO.webp"
import setup from "./setup.webp"

import thesis from "./Thesis.pdf"
import pres from "./Thesis_presentation.pdf"


import SUP from '../../../SUP';
import {PiPresentationChart, CgWebsite,FaFileAlt} from "../../../icons";


const Thesis = () => {

  const MAL = "https://spauldingrehab.org/research/programs-labs/motion-analysis"

  return (
        <Card
        title= {<div align = "left">An AFO<SUP ID="AFO"/><br/> with customizable <br/>stiffness </div>}
        bodyText="Using inertial motion capture to access the capacity of a novel active device in simulating ankle-foot orthoses for stroke survivor rehabilitation"
        linkText="Learn More"
        cardContent={<div>
            
            <br/>
            <h3 align="left">Abstract</h3>
            <p align="left">
              Post-stroke individuals frequently experience asymmetric lower limb impairments, significantly af-
              fecting their gait. Ankle-foot orthoses (AFOs) are commonly prescribed to support mobility dur-
              ing rehabilitation and in daily life, aiming to provide mechanical assistance and promote functional
              movement. <br/><br/>
              Most often, mechanically passive AFOs are used. These rely on elements such as springs or dampers
              to store and release energy, supporting balance and forward propulsion. A wide variety of passive
              AFO technologies exist, differing in characteristics such as stiffness, equilibrium position and dy-
              namic. Choosing the right AFO for a patient is difficult, and being able to test, or simulate, different
              orthosis could be useful.<br/><br/>
              The MDxx prototype from Dephy Inc. is a novel motorized ankle-foot orthosis capable of simulating
              the stiffness behavior of passive devices. This study is part of a broader investigation into the poten-
              tial of the Dephy system for rehabilitation and focuses on its ability to replicate a patient’s habitual
              orthosis across multiple ambulation tasks, both in and outside of the laboratory.
              To analyze gait differences, optical motion capture is considered the gold standard. However, its use
              is limited to controlled laboratory environments. To assess gait patterns outside the lab, we employed
              inertial motion capture (Xsens).<br/><br/>
              The primary objective of this study was to evaluate the reliability of Xsens for estimating joint angles
              during gait, especially in detecting gait pattern differences. The secondary objective was to assess
              the capacity of the Dephy to simulate various AFOs across multiple ambulation tasks : straight walk
              in a hallway, stairs, and ramp.<br/><br/>
              Our findings show that Xsens provides highly reliable joint angle estimates and successfully captures
              complex gait patterns. However, it is subject to session-specific offsets. they may falsify the result
              when comparing across sessions.<br/><br/>
              The Dephy performed well in simulating flexible to moderately stiff AFOs, across all tasks. However, it
              showed limitations when attempting to replicate the behavior of very stiff, dynamic, or mechanically
              complex orthoses such as hinged AFOs.

            </p>
          <Col className="d-flex justify-content-center">
          <Image src={Lesgo} alt="Lesgo"  width="100%" rounded fluid className="position-relative z-index-1" />
        </Col>
          <p align="center">Hi from the lab :)</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(thesis)}><span class="text"><FaFileAlt />See full thesis</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(pres)}><span class="text"><PiPresentationChart />See thesis presentation</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(MAL)}><span class="text"><CgWebsite />Visit the Motion Analysis Lab</span></button><br/> 
                </div>
                </div>
          }
        backgroundImage={setup}
        time="Feb-Sept 2025"
        type="Master Thesis"
      />
  );
}

export default Thesis;