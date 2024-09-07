import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";
import { Image } from 'react-bootstrap';

import sky from "./sky.png"
import report from "./ML4Science.pdf"

import { FaFileAlt } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";


const LAPD = () => {
  const git="https://github.com/CS-433/ml-project-2-lapd"
  const lab="https://www.epfl.ch/labs/lapd/"
  const course="https://edu.epfl.ch/coursebook/en/machine-learning-CS-433"

  return (
        <Card
        title="GHI predictor"
        bodyText="Predicting GHI from webcam images and meteo data using CNN, LSTM and visual transformer"
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
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub/>Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(lab)}><span class="text"><ImLab />See hosting lab</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={sky}
      />
  );
}

export default LAPD;