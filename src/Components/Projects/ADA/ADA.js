import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";


import { CgWebsite } from "react-icons/cg";
import { PiPresentationChart } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

import Croco from './couvCroco.png';


const ADA = ({setIsADAExpanded}) => {
  const website="https://jadetherras.github.io/ADAlligators_website/"
  const course="https://edu.epfl.ch/coursebook/en/applied-data-analysis-CS-401"
  const git="https://github.com/epfl-ada/ada-2024-project-alligatorsdontapologize24"

  return (
        <Card
        title= {<div align = "left">The feedback loop<br/> of violence</div>}
        bodyText="How violent movies shape real-world violence : A Data Analysis study"
        linkText="Learn More"
        cardContent={<div>
            <br/>
            <p align="left">How to conduct strong and reliable data analysis, and how to present it to the word in a fun and interactive way ?</p>
            <h3 align="center">How do real word violence and movies violence influence each other ?</h3><br/>
            <p align="left">
            Can we identify periods of unusually violent releases? Can we identify genres that are particularly violent? Is there a significant (positive or negative) correlation between the prevalence of violent movies and reported violent crimes in the US ? In other words, can we say that violent movies increase real-world violence, or that they serve as a release that reduces it?
            </p>
            <p align="left">This study try to give a answers to all these questions, by following the story of Crocolock, a detective Crocodile. 
            The journey take place at the headquarter of the CrocoFBI. Crocolock and is acolyte, Gatson, want to highlight the link between movie violence and 
            real life violence in the USA. </p>
                <div>
                <button class="button-48" onClick={() =>window.open(website)}><span class="text"><CgWebsite /> Check our website !</span></button><br/>                 
                <button class="button-48" onClick={() =>window.open(git)}><span class="text"><FaGithub /> All the data analysis workflow</span></button><br/>
                <button class="button-48" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart /> See corresponding course</span></button><br/>
                
                </div>
                </div>
          }
        backgroundImage={Croco}
        onExpand ={setIsADAExpanded}
        time="Winter 2024"
        type="Course project"
      />
  );
}

export default ADA;