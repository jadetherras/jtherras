import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import helpie from "./helpie.png"
import report from "./ATC.pdf"


import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";

const Helpie = () => {
  const git ="https://github.com/ejayromero/ATC-Helpie-2024/tree/main"
  const user = "https://github.com/ejayromero/ATC-Helpie-2024/blob/main/HELPIE%20-%20Mode%20d'emploi%20-%20User%20guide.pdf"
  const epfl = "https://actu.epfl.ch/news/making-a-difference-with-the-make-assistive-techno/"
  
  return (
        <Card
        title="Helpie"
        bodyText="An app to help neurodivergent and mental impaired people use public transport"
        linkText="Learn More"
        cardContent={<div>
            <p>
            <br/><br/><br/>
            
            Nowerdays in switzerland, public transport can get you nearly everywhere.
            We use it daily, to go to work, see friends, make groceries...
            We use the SBB app, the swiss transport app, to buy the ticket, plan and follow the course. 
            However, the use of such complex app can be difficult and stressing for some peoples. Delay and others can be additional stress.
            <br/><br/>
            Helpie have been developped within the Hackaheath program, in collaboration with the SBB and SBB inclusive. 

            Helpie, an app to help mental impaired people to travel alone 
            This project is proposed in collaboration with SBB. 
            The goal is to develop an app that helps mental impaired people to travel serenely alone. 
            SBB inclusive app team will provide support to get and provide simplified information from their app. 
            The challenger will specify his needs to personalise the solution
          </p>
          <Col>
          <Row className="justify-content-md-center gap-1">
              <div><p>
                <br/>
                <br/>
                6 months projects<br/>
                <a href>Hackaheath association</a><br/>
                <a href>MAKE epfl project</a><br/>
                <a href>SSB</a><br/>
                <a href>Euroteck hackatlon</a><br/></p>
                </div>
                </Row>
                </Col>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub /> Go to git repository</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />Get project report</span></button><br/>
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