import React from 'react'
import "../../../Style.css";
import Card from '../../card.js';
import "../../button.css";

import sky from "./sky.png"
import report from "./ML4Science.pdf"

import { FaFileAlt } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";


const LAPD = ({setIsLAPDExpanded}) => {
  const git="https://github.com/CS-433/ml-project-2-lapd"
  const lab="https://www.epfl.ch/labs/lapd/"
  const course="https://edu.epfl.ch/coursebook/en/machine-learning-CS-433"

  return (
        <Card
        title="GHI predictor"
        bodyText="Predicting GHI from webcam images and weather data using CNN, LSTM and visual transformer"
        linkText="Learn More"
        cardContent={<div>
            <h3 align="left">The project</h3>
            <p align="left">
            This project was made in collaboration with the <hard>LAPD</hard>
 (Laboratory of Applied Photonics Devices) in the context of the <hard>ML4Science</hard> project proposed by the Machine
Learning course (CS-433) of EPFL.<br/>
            The impact of solar energy on the Swiss power grid becomes
more and more significant. As storing great amounts of
electrical energy is impossible for now, energy companies
are looking for new methods to predict the power generated/consumed in advance to tune their grid accordingly. <br/>
Solar panel performance is inherently tied to solar radiation
levels, referred to as Global Horizontal Irradiance (GHI).<br/>
Having an accurate and localized prediction of the GHI for
the coming hours could thus be very beneficial.
To this day, GHI predictions are predominantly supplied
by meteorological companies that rely on satellite imagery and complex algorithms. However, these predictions
often lack spatial resolution i.e. they are not precise for small
areas. Moreover, they may not be highly accurate for specific
timescales. Consequently, the objective of this project is to
develop a machine learning algorithm capable of generating
accurate local predictions of the GHI two hours after the
sampling of meteorological data (such as wind, current GHI,
date, etc.) and webcam images sourced from two cameras
situated on the EPFL campus.
          </p>
          <h3 align="left">Technical overview</h3>
          <p align="left">
          The lab provided a first model (in Keras) as a baseline model to improve.<br/>
          Three distinct model architectures were built on
this basis. The first two models use a combination of Convolutional Neural Network (CNN)
and Long Short Term Memory (LSTM) units and combine
images and weather data in distinct ways. The third one is
based on an image-free dataset and therefore only relies on
Multi-Layer Perceptron (MLP) combinations with LSTMs.
Finally, an entirely different architecture has been put in
place to make a fourth model which uses vision
transformers on the images and finally combines it with
the weather data with MLP layers. <br/>
To know more about the models and result, see the project report.
          </p>
          <h3 align="left">Personal work</h3>
          <p align="left">
          We worked in collaboration for all the structures of the models. I personnally deep into the study of CNN and LSTM, 
          vision transformer and developped custom features such as a cloud detector. 
          
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
        onExpand ={setIsLAPDExpanded}
        time="Winter 2023"
        type="Course project"
      />
  );
}

export default LAPD;