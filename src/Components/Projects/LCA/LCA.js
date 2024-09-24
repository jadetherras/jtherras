import React from 'react'
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";

import image from "./book.jpg"
import report from "./LCA_assessment.pdf";

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";

import SUP from '../../../SUP.js';

const LCA = () => {
  const course="https://edu.epfl.ch/coursebook/en/lifecycle-performance-of-product-systems-ME-516"
  return (
        <Card
        title={<p align="left">Environmental<br/>impact of <br/>a day of leisure ? </p>}
        bodyText={<p>Conduct a Environmental LCA<SUP ID="LCA"/> of different leisure scenario</p>}
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">Context</h3>
            <p align="left">
                As a engineer, being able to assess the environmental, social and economical impact of our project is essential. 
                The course of Lifecycle performance of product systems of EPFL provide methods and tools for the development of, the modelling and simulation of the analysis. (product design, manufacturing process and system production).
                The course offer interpretation methods of existing studies, teach how to evaluate the environmental and social impacts of companies, projects and products, and of to assessed the impact of potential solutions. 
                The project is part of an exercise in the context of the course. The recipient is the professor, teaching assistants and possibly other students.
            <br/><br/>
<h3 align="left">Practical project - leisure time</h3>
Every activity we engage in have a environmental impact, even in a leisure day in Switzerland.
Each activity will have a different impact, and contribute to the total impact of each individual.
This study aims to assess and compare the impact of different scenarios for a day of leisure of
a Switzerland citizen. 
Three different scenarios, with variants, are compared.
<ol>
<li>Environmental impacts of reading a book on paper versus on an iPad/laptop.</li>
<li>Environmental impacts of watching a streaming movie vs on a DVD vs in a theatre movie.</li>
<li>Environmental impacts of a ski day in Verbier, going there by train and bus or with a car, skiing the whole day.</li>
</ol>
Following the LCA methodology, functional units, parameters and system boundaries have be
defined. The impact of each scenario have been inventoried, analyzed and compared. Finally,
possible alternatives to reduce the impact of each activity have been discussed.

          </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={image}
        time="Spring 2024"
        type="Course project"
      />
  );
}

export default LCA;