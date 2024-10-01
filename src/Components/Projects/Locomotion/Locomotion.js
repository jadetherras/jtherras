import React from 'react';
import { useEffect, useRef, useState } from 'react';
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";
import ReactPlayer from 'react-player/youtube';

import couv from "./pouf.png";
import report from "./locomotion_1.pdf";
import report3 from "./P_openSim.pdf";
import report2 from "./P_scone.pdf";
import report1 from "./P_SLIP.pdf";


import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";
import SUP from '../../../SUP';

const Locomotion = () => {
  const git ="https://github.com/jadetherras/project_1_locomotion/tree/main"
  const course="https://graphsearch.epfl.ch/fr/course/BIOENG-404"
  const video="https://youtu.be/vRkaYBY7ykE"
  
  return (
        <Card
        title={<div align="left">A gate analysis of <br/> SCI<SUP ID="SCI"/> patients <br/> with &
without <br/> EES<SUP ID="EES"/> stimulation <br/></div>}
        bodyText={<div> An overview of locomotion analysis tools followed by a gate analysis of SCI<SUP ID="SCI"/> patients with &
without EES<SUP ID="EES"/> stimulation in comparison to healthy subjects </div>}
        linkText="Learn More"
        cardContent={<div>
            <div align="center"><ReactPlayer url={video} width="100%" /></div> <br/>   
            <p align="center">simulation in matlab of the gate of a healthy subject, obtained using kinetic markers.
                The leg is colored in blue or red at specific walking steps (foot off and strike)  </p> 
          <h3 align="left">Gate analysis project</h3>
           <p align="left">
            This project aims to assess of EES stimulation improve SCI patient gate in the direction of healthy subjects.<br/><br/>
            The gait pattern of three groups have been analyzed and compared with kinetic markers and EMG<SUP ID="EMG"/>: healthy subjects, patients suffering from SCI with and without stimulation. 
            Data was taken in the Courtine lab at the CHUV. Healthy participants were asked to walk on a treadmill at different speed and inclination. 
            Participants with SCI were supported by an overground robot, and had to walk first without stimulation, and them with stimulation in similar conditions as healthy subject. <br/><br/>
            First, we developed an algorithm to extract gait event from the data,  and visualized the walking pattern for all subjects. Secondly, we chose and extracted relevant gait and EMG parameters
            to assess the walking performance of the subject. Finally, we performed a PCA<SUP ID="PCA"/> analysis, and concluded that EES stimulation effectively improved the gait of SCI patient. Notably, 
            we found that stimulation improve the ability to perform high and long step. The movement is easier and the speed increases. However, the variability of gait is still a big problem, as EES will not optimize the 
            walking pattern to perform regular and efficient movement while minimizing fatigue. 
            <br/><br/>
            (For confidentiality reasons, the datasets of the patients are not available on the git repository)
           </p>
          <h3 align="left">Context</h3>
          
          <p align="left">
          The master course of analysis and modelling of locomotion from EPFL presents an overview of the state of the art in the analysis and modeling of human locomotion and the underlying motor circuits. 
          Multiple aspects are considered including neurophysiology, gait characterization, biomechanics, numerical modeling, neuroprosthetics, and links to biped robots. 
          <br/><br/>
          The course covers multiple locomotion analysis tools and proposes hand-on project to fully understand each of them. We had been introduced to the SLIP (Spring-Loaded Inverted Pendulum) model, a simple gait model.
          Then, we worked with OpenSim on a musculoskeletal model. Finally, we discovered SCONE, an open-source software for predictive simulation of human and animal motion. <br/><br/>
          A second part of the course consisted of a gait analysis in matlab.
           <br/></p>
           
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub /> Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report1)}><span class="text"><FaFileAlt />See project SLIP</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report3)}><span class="text"><FaFileAlt />See project OPENSIM</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report2)}><span class="text"><FaFileAlt />See project SCONE</span></button><br/>
                
                </div>
                </div>
          }
        backgroundImage={couv}
        time="Spring 2023"
        type="Course project"
      />
  );
}

export default Locomotion;