import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import couv from "./couv.jpg"
import report from "./Neural_interface___rendu.pdf"
import prop from "./First_draft.pdf"

import { FaFileAlt } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";
import { ImLab } from "react-icons/im";

const NeuralInterface = () => {
  const course="https://edu.epfl.ch/coursebook/en/neural-interfaces-NX-422"

  return (
        <Card
        title="wearable EMG"
        bodyText="a wireless active flexible microneedle-array-electrode system for long-term recording of EMG signals in part of a closed-loop neurorehabilitation feedback system"
        linkText="Learn More"
        cardContent={<div>
            
            <br/><br/><br/>
            <h3 align="left">The initial project</h3>
            <p align="left">
              This project emerged in the context of a project course, where group of student are invited to look into 
              neural interface state of the art product and propose a way to improve the product. <br/>
             This project comme from a 
            The purpose of our device is to aid in the neurorehabilitation of patients with motor disorders,
such as spastic quadriplegia, who face challenges in motor control due to the inability to distinguish between voluntary movements and spasms. We aim to improve an existing device into a
daily usable one that that is adaptable to various patients.
We suggest a wireless active flexible microneedle-array-electrode system for long-term recording
of muscle activity signals (EMG) that improves the recording and filtering part. For that we first
established the requirements for our new device and we came up with an innovative solutions
that combine elements of existing literature, including biomedical studies on ECG recordings.
Then , both the electrode and the electronics were designed, resulting in a comprehensive device.
Particular attention was given to the connectors to ensure feasibility, as well as materials and
dimensions.
The result is a pair of recording and reference electrode embedding arrays of 36 microneedles
that are grown thanks to the MRLD method on a Parylene flexible substrate, connected via
a conductive layer of Ti/Au to FFC cables to enable their pooling and transmission to the
electronics. To ensure good conductivity and low impedance, a Ti/Au/PEDOT:PSS coating is
applied to the micronnedles. Traditional methods such as photo-lithography, etching and sputtering are used to grow the substrate and the conductive layers to ensure their feasibility in any
clean-room.
The signals are filterd by a 20-1000Hz bandpass filter, amplified through the tunable gain (10,100,
1000) of an OTA amplifier. The resulting signals are converted to digital data and transmitted
wirelessly thanks to a microcontroller and a bluetooth module to a computer for further processing. This involves the application of an amplitude threshold algorithm of the EMG signals
enabling to distinguish between spasms and voluntary movements. The result is a feedback in
form of a visual interactive application on a screen.
Theoretical characterisations of the electrodes is computed to ensure bending and stress resistance, enabling a stable and conformable interface with the curved skin. Micronnedle impedance
is calculated theoretically and is slightly higher than the values found in the literature. Empirical characterisations would be needed prior any real-life application to ensure biosafety of the
device. A feasibility assessment is therefore conducted. Finally, a set of limitations and areas
for improvement is outlined for the real device to come to life.
          </p>
          <p align="left">
          </p>
          <h3 align="left">Following work</h3>
          <p align="left">
            
            </p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(prop)}><span class="text"><FaFileAlt />See project proposition report</span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See final project report</span></button><br/>  
                <button class="button-48" role="button"><span class="text"><ImLab />See hosting lab</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={couv}
      />
  );
}

export default NeuralInterface;