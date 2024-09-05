import React from 'react'
import Header from "./Navbar";
import About from './About';
import { Container } from 'react-bootstrap';
import Showcase from './Showcase';

const Divider = () => {
    return (
        <Container>
        
        <hr class='divider'></hr>
        </Container>
    );
};

const Home = () => {
    return (
        <>
            <Header/>
            <section id = "About">
                <About/>
            </section>
            
            <section id = "Showcase">
                <Divider/>
                <Showcase/>
            </section>
            <Divider/>
            
        </>
    )
}

export default Home
