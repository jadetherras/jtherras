import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";
import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player/youtube'

import T1 from "./IMG_6710.JPG"
import T2 from "./IMG_6712.JPG"
import bioquest from "./icon.svg"
import logo from "./48C.png"


import { FaGithub } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { FaVideo } from "react-icons/fa";





const IGEM = ({ isIGEMExpanded, setIsIGEMExpanded }) => {

  const wiki = "https://2023.igem.wiki/epfl/"
  const igem = "https://igem.org/"
  const introdvideo = "https://www.youtube.com/watch?v=g9VCcqWoUBQ"
  const video = "https://www.youtube.com/watch?v=SaA0YtPz03s"
  const git ="https://gitlab.igem.org/2023/software-tools/epfl"
  const videobioquest = "https://static.igem.wiki/teams/4888/wiki/tutorial-xk8tsjb4.gif"
  
  return (
        <Card
        title={<p align= "left">48C - IGEM</p> }
        bodyText="A cadmium catcher live biotherapeutic product"
        linkText="Learn More"
        cardContent={<div>
           <div align="center"><ReactPlayer url={introdvideo} width="100%" /></div> <br/>
           <h3 align="left">What is 48C ?</h3>
           <p align="left">
            IGEM is an international synthetic biology competition in which teams design and implement engineered biological-based systems to address problems. <br/>
            Human practices are at the center of the project. Along with biology, teams organise events, collaborate and meet professionals.
           <br/><br/>
           Cadmium stands as one of the most detrimental heavy metals to human health.
           The dangerous nature of cadmium has led in the past decade to the introduction of measures restricting its use in Europe. 
           Notwithstanding, its presence in the environments and in various products such as cigarette smoke, rechargeable batteries, pigments, coatings, plastics, and electronic parts remains.
           Improper disposal of these items, along with the mining of metals where cadmium is a by-product and the utilization of fertilizers containing cadmium, has resulted in soil and water contamination. 
           This, in turn, has impacted our food reserves, creating a concerning situation.
           <br/><br/>
           The EPFL IGEM team have engineered an E. Coli strain to produce two key proteins: a mucus-binding protein called SpaC and a cadmium-specific binding protein known as EC20.<br/>
The mucus-binding protein will implant our probiotic into the intestine and our cadmium binding protein will allow it to collect any cadmium ions present there. As the mucus naturally turns over, our probiotic will eventually exit the body, cleansing it of cadmium.
As a safety precaution, the production of the SpaC protein is halted once it enters the body, and the protein naturally degrades over time, allowing the bacteria to be released. To prevent environmental spread and genetic exchange with other organisms, the bacteria are auxotrophic and have specific genetic mutations that prevent horizontal gene transfer.
           </p>
          <h3 align="left">Bioquest - An educational game !</h3>
          <table cellspacing="50">
          <tr>
          <td>
          <p align="left">Education about synthetic biology is a major concern. 48C have deep into vulgarisation by developping and proposing a game, Bioquest, introducing synthetic biology basics to the public. <br/>
          The game is divided into two different parts. <br/>
          The main game takes the player into the discovery of some of synthetic biology’s main advancement (such as GFP, ampicillin…) through 48C’s project: catching cadmium. 
          Fifteen different minigames will take the player through lab work and safety as well as some biological concepts. <br/>
          Moreover, 48C have created a mini-IGEM competition, BSGV, for younger student in our local town in switzerland.
          </p>
          </td>
          <td>
          <Image src={bioquest} alt="bioquest logo" width="150%" rounded fluid/>
          </td>
          </tr>
          </table>
          <img src={videobioquest} alt="tutorial of bioquest" width="75%" ></img>
          <h3 align="left">Awards</h3>
          <p align="left">
            Our team had the honor to receive a gold medal, the best education prize and 2 nominations (best therapeutics project, safety and security award)
          </p>
                <br/>
                <Col> 
                <Row className="justify-content-md-center gap-3">
                <Image src={T1} alt="EPFL winner"  width="20%" rounded fluid className="position-relative z-index-1" />
                <Image src={T2} alt="EPFL best education" width="20%" rounded fluid className="position-relative z-index-1" />
                </Row>
                </Col>
                <br/>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(wiki)}><span class="text"><CgWebsite />Check our website !</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(video)}><span class="text"><FaVideo />See the presentation video (15min)</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub /> Go to Bioquest git</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(igem)}><span class="text"><GiTargetPrize /> See IGEM competition</span></button><br/>
              
                </div>
                </div>
          }
        backgroundImage={logo}
        onExpand ={setIsIGEMExpanded}
      />
  );
}

export default IGEM;