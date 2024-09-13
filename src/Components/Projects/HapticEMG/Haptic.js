import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import couv from "./paddle.jpg"
import report1 from "./HHRI_Lab_2___report.pdf"
import report2 from "./HHRI_Lab_3___report.pdf"
import report3 from "./HHRI_Lab_EMG.pdf"

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";

const Haptic = () => {
  const course="https://edu.epfl.ch/coursebook/fr/haptic-human-robot-interfaces-MICRO-553"
  
  return (
        <Card
        title={<div align="left">An Haptic <br/> human/robot EMG<br/> interface</div>}
        bodyText="Control a haptic paddle with EMG signals"
        linkText="Learn More"
        cardContent={<div>
          <h3 align="left">Context</h3>
          <p align="left">
          Haptic is define by real and simulated touch interactions. The haptic human robot interfaces epfl course aims to teach the basics of
           haptic devices, force feedback and mechanical man-machine interfaces. We handled a project with an "haptic paddle", a complete mechanical device with full laptop control interface. <br/>
           The implementation was made in C and the figures and interpretation in matlab. <br/></p>
           <h3 align="left">Haptic paddle project</h3>
           <p align="left">
           On the paddles, we first assessed frictions and implemented a PID controller. Secondly, we had to implement both a transparency control and a virtual wall <br/>
           In the last part of the project, we had access to an EMG sensor (placed on the biceps). We processed the data in real time and implemented a controls of the paddle with the EMG, 
           both position control and force control. We finally had to find a way to handle muscle tremors, obtaining a stable control. 
           </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report1)}><span class="text"><FaFileAlt />See report - SIMULATION AND REALIZATION OF A PID CONTROLLER </span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(report2)}><span class="text"><FaFileAlt />See report - Z-WIDTH OF THE CONTROLLER </span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(report3)}><span class="text"><FaFileAlt />See report - EMG TORQUE AND POSITION CONTROL </span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={couv}
        time="Spring 2024"
        type="Course project"
      />
  );
}

export default Haptic;