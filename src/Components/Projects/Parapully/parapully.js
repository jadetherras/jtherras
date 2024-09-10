import React from 'react'
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";

import sky from "./leman.jpeg"
import report from "./Report_ParaPully_project.pdf"

import { FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";


const Parapully = () => {
  const git="https://github.com/jadetherras/ParaPully"
  const course="https://edu.epfl.ch/coursebook/en/introduction-to-machine-learning-for-bioengineers-BIO-322"

  return (
        <Card
        title="Parapully"
        bodyText="Will it rain tomorrow at Pully ? Machine Learning project"
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">The project</h3>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub/>Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={sky}
      />
  );
}

export default Parapully;