import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import couv from "./paddle.jpg"
import report1 from "./HHRI_Lab_2___report.pdf"
import report2 from "./HHRI_Lab_3___report.pdf"
import report3 from "./HHRI_Lab_EMG.pdf"

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";

const Haptic = () => {
  const course="https://edu.epfl.ch/coursebook/fr/haptic-human-robot-interfaces-MICRO-553"
  return (
        <Card
        title={<div align="left">Haptic human/robot <br/>EMG interfaces</div>}
        bodyText="Control a haptic paddle with EMG"
        linkText="Learn More"
        cardContent={<div>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report1)}><span class="text"><FaFileAlt />See report - </span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(report2)}><span class="text"><FaFileAlt />See report - </span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(report3)}><span class="text"><FaFileAlt />See report - EMG </span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={couv}
      />
  );
}

export default Haptic;