import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import couv from "./couv.jpg"
import report from "./Neural_interface__rendu.pdf"

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";
import { ImLab } from "react-icons/im";

const NeuralInterface = () => {
  const course="https://edu.epfl.ch/coursebook/en/neural-interfaces-NX-422"
  return (
        <Card
        title="wearable EMG"
        bodyText="a wireless active flexible microneedle-array-electrode system for long-term recording of EMG signals in part of a closed-loop neurorehabilitation feedback system"
        linkText="Learn More"
        cardContent={<div>
            
            <br/><br/><br/>
            <h3 align="left">The project</h3>
            <p align="left">
            
          </p>
          <h3 align="left">Technical overview</h3>
          <p align="left">
          </p>
          <h3 align="left">Personal work</h3>
          <p align="left">
            
            </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>  
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