import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import report from "./Clinical_vignette.pdf"
import device from "./overview_device.png"

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";


const TNE = () => {
  const course = "https://edu.epfl.ch/coursebook/en/translational-neuroengineering-NX-423"
  
  return (
        <Card
        title={<p align="left">BCI with<br/> sensory feedback</p>}
        bodyText={<div>Restoring natural motor and sensory
function after spinal cord injury
            </div>}
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">The project</h3>
            <p align="left">
 This project, conducted for the course of Translational neuroengineering of EPFL, explore possibilities for restoring sensory feedback in patients already implanted with a brain-spine interface (BSI) for motor control. <br/><br/>
 A BSI is a system aiming to create a digital bridge between the brain and the spinal cord to restore information flow after a
spinal cord injury. Sensory feedback restitution, especially proprioception, would be a sensible improvement for patients. <br/>
          The project focussed on research. We explored the state of the art and how we may improve the feedback with both non-invasive (vibrostimulation) and more invasible methods (Spinal cord or brain stimulation). 
          We developed a device using sensors along the legs and foot, electrodes for brain stimulations and explored stimulation pattern and generators. 
          The project also proposed a plan for approvals and clinical trials, and explored the project limitations. 
          </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={device}
      />
  );
}

export default TNE;