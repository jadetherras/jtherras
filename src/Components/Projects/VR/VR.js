import React from 'react'
import "../../../Style.css";
import Card from '../../card';
import "../../button.css";

import logo from "./tree.jpg"
import report from "./I_don_t_want_to_be_human_anymore_.pdf"
import ReactPlayer from 'react-player/youtube'
import { Box } from '@mui/material';


import { FaGithub } from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";
import { FaFileAlt } from "react-icons/fa";

const VR = ({setIsVRExpanded, foundCount = 0,totalCount = 0}) => {
  const git ="https://github.com/jadetherras/HOVR"
  const course="https://edu.epfl.ch/coursebook/fr/virtual-reality-CS-444"
  const video="https://youtu.be/cdpJOEH0v8c"
  return (
        <Card
        title={<p align= "left">I don't want to be <br/>  human anymore!</p> }
        bodyText="A virtual reality puzzle game"
        linkText="Learn More"
        cardContent={<div>
          <h3 align="center" >If a lantern (diamond) appear, click to activate!</h3>
          <div align="center"><Box className="counter">Found : {foundCount}/{totalCount}</Box></div>
          <div align="center"><ReactPlayer url={video} width="100%" /></div> <br/>
           <h3 align="left">Context</h3>
           <p align="left">
            "I don't want to be human anymore" is a virtual reality puzzle game developed in C# within Unity3D, made in the context of the VR course of EPFL.<br/>
            We implemented multiple 3D real-time interactions and gathered them into a puzzle game, with appropriate visual and haptic feedback.
            </p>
            <h3 align="left">The game</h3>
           <p align="left">
           Find and activate all lanterns (diamonds) to get to the
next level! <br/>
The game play a lot with size and interaction, as you have 2 mode. In human mode, you are on the island and can interact with objects, enter buildings, activate lanterns... 
In god mode, you stand in front of the island. You are enormous, and can now move buildings, kill monsters, move your human body... <br/>
To master a puzzle, you will have to combine widely this two mode. 
                       </p>
            <h3 align="left">Synopsis</h3>
           <p align="left">
           You are God. Even better, you are Odin, the God of all
Gods, the Omniscient and Almighty Father of human civilization. Until you are not anymore. One day, you wake
up without any powers in Helheim, the deepest island of
the Nine Worlds. You need to solve this mystery and even
more importantly, you need to regain access to Asgard,
the Valley of Gods located at the top of the great Tree Yggdrasil. For this, you will be going from island to island,
always climbing a level in Yggdrasil in direction of your
home. The path will not be easy as your enemy has put
several obstacles to stop you. But you are not human, and
the more you climb, the more you regain your divine energy. This energy will help you access a limited god-like
mode that can move and manipulate objects in a way that
a simple mortal could not even dream of. Welcome to ”I
don’t want to be human anymore”, the game where you
will regain your entitled powers and that permits you to
become who you really are.
            </p>
          <p align="left"></p>
          
                <div>
                <button class="button-48" role="button" onClick={() =>window.open(report)}><span class="text"><FaFileAlt />See project report</span></button><br/>
                <button class="button-48" role="button" onClick={() =>window.open(git)}><span class="text"><FaGithub />Go to git repository</span></button><br/>  
                <button class="button-48" role="button" onClick={() =>window.open(course)}><span class="text"><PiPresentationChart />See corresponding course</span></button><br/>
                </div>
                </div>
          }
        backgroundImage={logo}
        onExpand={setIsVRExpanded}
        time="Spring 2023"
        type="Course project"
      />
  );
}

export default VR;