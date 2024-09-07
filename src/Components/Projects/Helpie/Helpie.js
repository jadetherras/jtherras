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
            <h3>The project</h3>
            <p>
            Nowerdays in switzerland, public transport can get you nearly everywhere.
            We use it daily, to go to work, see friends, make groceries...
            We use the SBB app, the swiss transport app, to buy the ticket, plan and follow the course. 
            However, the use of such complex app can be difficult and stressing for some peoples. Delay and others can be additional stress.
            This is where Helpie come from. 
            </p><p>
            Helpie have been developped within the HackaHealth program, in collaboration with the SBB and SBB inclusive. The developpement process have been
            conducted in collaboration with a real life potential user.<br/>
            The project have been selected to participate to the 2024 EuroTeQaThon in Paris.
          </p>
          <h3>Technical overview</h3>
          <p>Prototyped in Figma, developped in Android studio. </p> <br/>
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
                <br/><br/>
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