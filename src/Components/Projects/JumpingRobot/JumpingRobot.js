import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import JR from "./JR.png"
import SR from "./simreal.png"

import report from "./JumpingRobot.pdf"
import slide from "./Final Presentation.pdf"

import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TfiLayoutSlider } from "react-icons/tfi";
import { ImLab } from "react-icons/im";
import { PiPresentationChart } from "react-icons/pi";
import { Image } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube'



const JumpingRobot = () => {
  const git ="https://github.com/alifuatsahin/Jumping-Robot-Design/tree/main"
  const course = "https://edu.epfl.ch/coursebook/en/data-driven-design-fabrication-methods-ME-428"
  const lab = "https://www.epfl.ch/labs/create/"
  const video = "https://youtu.be/pJFbF0_4d9o"

  return (
        <Card
        title="Jumping Robot"
        bodyText={<div>Optimize the jump of an homemade robot using data driven methods
            </div>}
        linkText="Learn More"
        cardContent={<div>
          <div align="center"><ReactPlayer url={video} width="100%" /></div> <br/>
           
            <h3 align="left">The project</h3>
            <p align="left">
 This project focuses on the data-driven optimization and fabrication of a jumping robot designed to maximize
jumping distance while minimizing energy consumption. Using a configurable simulation environment in
PyBullet, we investigated the effects of varying key parameters, including link lengths, spring stiffness, and
compression, on the robot's performance. Through iterative simulations and optimization algorithms, we
identified an optimal set of parameters that achieved the desired balance between jumping distance and energy
efficiency. The results were validated through the fabrication of a physical prototype, demonstrating the
practical applicability of our optimized design. This study showcases the potential of combining simulation-based optimization with real-world implementation in robotic design.
          </p>
          <h3 align="left">Personal work</h3>
          <p align="left">
 I was charged with the data-driven optimization part, implementing Genetic algorithm and Bayesian optimization in Python, and developing a workflow to find the best parameters. 
 I was also involved in preliminary research, problem definition and parameters choice. 
            </p>
          <Image src={SR} alt="robot"  width="100%" rounded fluid className="position-relative z-index-1" />
          <br/><br/>
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