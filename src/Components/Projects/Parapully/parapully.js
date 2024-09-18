import React from 'react'
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";

import sky from "./leman.jpeg"
import report from "./Report_ParaPully_project.pdf"

import { FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";


const Parapully = ({setIsPPExpanded }) => {
  const git="https://github.com/jadetherras/ParaPully"
  const course="https://edu.epfl.ch/coursebook/en/introduction-to-machine-learning-for-bioengineers-BIO-322"

  return (
        <Card
        title="Parapully"
        bodyText="Will it rain tomorrow at Pully ? Machine Learning project"
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">Context</h3>
            <p align="left">Will it rain tomorrow at Pully? Do we need a ParaPully? Here is the machine learning project proposed by the EPFL introduction to machine learning course. <br/>
            We had to code a machine that computes the probability of rain the next day in Pully. This prediction should be done based on the data collected over a few days from several weather stations in Switzerland.
            </p>
            <h3 align="left">Technical overview</h3>
            <p align="left">
            The machine was coded in Julia on Pluto notebooks. 
            In deep data cleaning, visualization and exploration was done. 
            Following this step, multiple models was investigated : Logistic classifier, KNN classifier, RandomForest classifier and
            NeuralNetwork classifier.</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub/>Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={sky}
        onExpand ={setIsPPExpanded}
        time="Winter 2021"
        type="Course project"
      />
  );
}

export default Parapully;