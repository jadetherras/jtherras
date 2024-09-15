import React, { useState } from 'react';
import Header from "./Navbar";
import About from './About';
import { Container } from 'react-bootstrap';
import Showcase from './Showcase';
import Contacts from './Contacts';
import Footer from './Footer';

const Divider = () => {
    return (
        <Container>
        <hr class='divider'></hr>
        </Container>
    );
};

const Home = () => {
    const [ANIMATION, setANIMATION] = useState(true);

    return (
        <>
            <Header setANIM = {setANIMATION}/>
            <section id = "About">
                <About/>
            </section>
        
            <section id = "Showcase" >
                <Divider/>
                <Showcase Animation = {ANIMATION}/>
            </section>
            
            <section id = "Contacts">
                <Divider/>
                <Contacts/>
            </section>
            <Footer/>
            
        </>
    )
}

export default Home
