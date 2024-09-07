import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            
            <br/><br/><br/>
            <h3 align="left">The project</h3>
            <p align="left">
            Nowerdays in switzerland, public transport can get you nearly everywhere.
            We use it daily, to go to work, see friends, make groceries...<br/>
            The swiss transport app, <hard>SBB</hard> allow us to buy the ticket, plan and follow the course. 
            However, the use of such complex app can be difficult and stressing for some peoples.<br/>
            This is where Helpie come from.
            </p><p align="left">
            Helpie have been developped within the <hard>HackaHealth</hard> program, in collaboration with the SBB and SBB inclusive. The developpement process have been
            conducted in collaboration with a real life potential user.<br/>
            The project have been selected to participate to the 2024 EuroTeQaThon in Paris, organized by <hard>EuroTeQ</hard>.
          </p>
          <h3 align="left">Technical overview</h3>
          <p align="left">Prototyped in Figma, developped in Android studio.<br/>
          Helpie allow to navigate the travel step by step. The app use the SBB api to extract the 
          transport step, and Google maps for walking step. The app have multiple setting that 
          can be customized for the users such as the langage, how to take the ticket, preregistred destinations... <br/>
          To know more about the use of the app, take a look at the <hard>User guide</hard><br/>
          To know more about the developpement process, take a look at the <hard>Git repository and report</hard></p>
          <h3 align="left">Personal work</h3>
          <p align="left">I was the coding leader on this projects. I notably implemented the transport part and the structure of the app. 
            I was also involved in the meeting with the challenger and in multiple presentation of the project. 
          </p>
          <Row className="justify-content-md-center gap-1">
          <Col align-items= "center">
              <p>
                6 months projects<br/>
                <a href>HackaHealth association</a><br/>
                <a href>MAKE epfl project</a><br/>
                <a href>SSB</a><br/>
                <a href>Euroteck hackatlon</a><br/></p>
                </Col>
                <Col>
                <Image src={screen} alt="Home screen of Helpie" width="40%" rounded fluid className="position-relative z-index-1" />
                </Col>
                </Row>
                <br/><br/>
                <Image src={team} alt="EPFL ATC team at EuroTeQ" rounded fluid className="position-relative z-index-1" />
                <br/>
                <p>The EPFL team at the EuroTeQaThon</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub /> Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(user)}><span class="text"><RiGuideFill />See user guide</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(epfl)}><span class="text"><MdArticle />See epfl article</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={helpie}
      />
  );
}

export default Helpie;