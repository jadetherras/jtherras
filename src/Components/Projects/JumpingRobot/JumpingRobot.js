import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";
import { Image } from 'react-bootstrap';

import JR from "./JR.png"

import report from "./JumpingRobot.pdf"
import slide from "./Final Presentation.pdf"

import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TfiLayoutSlider } from "react-icons/tfi";
import { ImLab } from "react-icons/im";
import { PiPresentationChart } from "react-icons/pi";


const JumpingRobot = () => {
  const git ="https://github.com/alifuatsahin/Jumping-Robot-Design/tree/main"
  const course = "https://edu.epfl.ch/coursebook/en/data-driven-design-fabrication-methods-ME-428"
  const lab = "https://www.epfl.ch/labs/create/"
  return (
        <Card
        title="Jumping Robot"
        bodyText={<div>Optimise the jump of an homemade robot using data driven methods
            </div>}
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
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub /> Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(slide)}><span class="text"><TfiLayoutSlider />See final presentation</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(lab)}><span class="text"><ImLab />See hosting lab</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={JR}
      />
  );
}

export default JumpingRobot;