import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";
import { Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import couv from "./rocket.JPG"
import team from "./pictureRocket.JPG"

import { CgWebsite } from "react-icons/cg";

const Rocket = ({isRocketExpanded, setIsRocketExpanded}) => {
  const RocketTeam="https://epflrocketteam.ch/"
  const SR = "https://epflrocketteam.ch/our-projects/space-race/"
  const video = "https://youtube.com/shorts/yRU7_JLZNSw?feature=share"
  const ECHO = "https://epflrocketteam.ch/wp-content/uploads/rocket-team-echo-final-2048x2048.png"
  return (
        <Card
        title={<div align="left">Rocket team <br/>ECHO</div>}
        bodyText="A small engeniered rocket -  Space Race project - Team leader recovery"
        linkText="Learn More"
        cardContent={<div>
          <h3 align="left">The Space race</h3>
          <p align="left">
            The EPFL rocket team gather students interested in space and rocket engineering. <br/>
            The Space Race programme consists of an annual friendly competition within the association.
            The goal is simple : Students new to the world of aerospace design, build and launch their own home-made rockets. 
            The teams are supervised by the more experienced members of the association to ensure a good knowledge transfer and a link with the other projects. <br/>
            The rockets built were designed to meet the requirements of the official Level 2 certification of the Tripoli Amateur Launchers Association.
            The objective was to bring a raw egg up to 1km in height and returning it intact to the ground.
            </p>
            <h3 align="left">ECHO</h3>
            <p align="left">
            Within the ECHO team, I was recovery team leader. The recovery system is part of the rocket that allows the rocket to safely return to earth after launch. 
            We designed and homemade 2 parachutes (my main job) and implemented an electronic and mechanic ejection systems.
            <br/><br/>
            Mission accomplished for ECHO !
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ flex: '1 1 auto', paddingRight: '10px', minWidth: '150px', textAlign: 'center' }}>
    <img src={ECHO} alt="echo" style={{ width: '100%', maxWidth: '300px' }} />
  </div>
  <div style={{ flex: '1 1 auto', minWidth: '300px', textAlign: 'center' }}>
    <ReactPlayer url={video} style={{ maxWidth: '100%', width: '300px' }} />
  </div>
</div>

                <br/>
                <Image src={team} alt="rocket team" width="50%" rounded fluid className="position-relative z-index-1" />
                <br/>
                <p>A part of the team before the launch</p>
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(RocketTeam)}><span class="text"><CgWebsite />Visit EPFL rocket Team</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(SR)}><span class="text"><CgWebsite />See space race project</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={couv}
        onExpand={setIsRocketExpanded}
      />
  );
}

export default Rocket;