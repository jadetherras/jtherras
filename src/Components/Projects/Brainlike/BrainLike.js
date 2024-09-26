import React from 'react'
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";

import result from "./result.png"
import report from "./Report.pdf"

import { FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";

import SUP from '../../../SUP.js';

const BL = () => {
  const git="https://github.com/jadetherras/brain-like"
  const course="https://edu.epfl.ch/coursebook/fr/brain-like-computation-and-intelligence-NX-414#:~:text=The%20course%20starts%20with%20fundamentals,the%20behavior%20of%20an%20animal."

  return (
        <Card
        title={<div align="left">Neural activity<br/>prediction</div>}
        bodyText={<div>Predict neural activity resulting from the
            vision of a labelled image during an object recognition task in non-human
            primates</div>}
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">Brain-like computation and intelligence course</h3>
            <p align="left">
            This project was made conducted in the context of the Brain-like computation and intelligence course of EPFL.<br/>
            Recent advances in machine learning have led to the development of powerful models that mimic animal perception and behavior. 
            The course explores and compares these models with biological brains, providing an overview of machine learning algorithms aimed at understanding the brain. 
            Machine learning draws inspiration from brain research and, in turn, enhances our understanding of brain function.
          </p>
          <h3 align="left">Technical overview</h3>
          <p align="left">
          The project's aim was to predict neural activity resulting 
          from the vision of a labelled image during an object recognition task in non-human primates. 
          The dataset consists of images (RGB) and the corresponding average firing rate of neurons located in the inferior temporal (IT) cortex.<br/>
          Working with Python, we explored multiple models, notably linear, task-driven, data-driven and pre-trained models. 
          </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub/>Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={result}
        time="Spring 2023"
        type="Course project"
      />
  );
}

export default BL;