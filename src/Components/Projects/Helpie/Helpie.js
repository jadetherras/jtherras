import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";
import { Image } from 'react-bootstrap';

import helpie from "./helpie.png"
import screen from "./screen.png"
import team from "./team.png"
import report from "./ATC.pdf"


import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import { GiTargetPrize } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";





const Helpie = () => {
  const git ="https://github.com/ejayromero/ATC-Helpie-2024/tree/main"
  const user = "https://github.com/ejayromero/ATC-Helpie-2024/blob/main/HELPIE%20-%20Mode%20d'emploi%20-%20User%20guide.pdf"
  const epfl = "https://actu.epfl.ch/news/making-a-difference-with-the-make-assistive-techno/"
  
  const HH = "https://www.hackahealth.ch/"
  const make = "https://www.epfl.ch/education/educational-initiatives/discovery-learning-program-2/interdisciplinary-projects/"
  const euroteck = "https://euroteq.eurotech-universities.eu/news/euroteqathon-2024-celebrating-connection-through-innovation-and-impact/"
  
  return (
        <Card
        title="Helpie"
        bodyText="An app to help neurodivergent and mental impaired people use public transport"
        linkText="Learn More"
        cardContent={<div>
          <h3 align="left">The project</h3>
          <p align="left">
 Nowadays in Switzerland, public transport can get you nearly everywhere.
 We use it daily, to go to work, see friends, make groceries...<br/>
 The Swiss transport app, <hard>SBB</hard> allows us to buy the ticket, plan and follow the course. 
 However, such a complex app can be difficult and stressful for some people.<br/>
 This is where Helpie comes from.
            </p><p align="left">
 Helpie has been developed within the <hard>HackaHealth</hard> program, collaborating with the SBB and SBB inclusive. The development process has been
 conducted with a potential real-life user.<br/>
 The project has been selected to participate in the 2024 EuroTeQaThon in Paris, organized by <hard>EuroTeQ</hard>.
          </p>
          <div class="wrap"><Image src={screen} alt="Home screen of Helpie" width="60%" rounded fluid className="position-relative z-index-1" /></div>
          <h3 align="left">Technical overview</h3>
          <p align="left">Prototyped in Figma, developed in Android studio.<br/>
 Helpie allow us to navigate step by step. The app uses the SBB API to extract the 
 transport step, and Google Maps for the walking step. The app has multiple settings that 
 can be customized for the users such as the language, how to take the ticket, and preregistered destinations... <br/>
 To know more about the use of the app, take a look at the <hard>User guide</hard>.<br/>
 To know more about the development process, take a look at the <hard>Git repository and report</hard>.</p>
          <h3 align="left">Personal work</h3>
          <p align="left">I was the coding leader on this project. I notably implemented the transport part and the structure of the app. 
 I was also involved in the meeting with the challenger and in multiple presentations of the project. 
          </p>
          
                <br/>
                <Image src={team} alt="EPFL ATC team at EuroTeQ" rounded fluid className="position-relative z-index-1" />
                <br/>
                <p>The EPFL team at the EuroTeQaThon</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub /> Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(user)}><span class="text"><RiGuideFill />See user guide</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(epfl)}><span class="text"><MdArticle />See epfl article</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(euroteck)}><span class="text"><GiTargetPrize />
                See EuroTeQ competition</span></button><br/>
                
                <button class="button-48" role="button" onClick={() =>window.open(HH)}><span class="text"><GiHealthNormal />
                See HackaHealth</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={helpie}
      />
  );
}

export default Helpie;