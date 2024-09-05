import React from 'react'
import Header from "./Navbar";
import About from './About';
import { Container } from 'react-bootstrap';
import Showcase from './Showcase';
import Contacts from './Contacts';

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
            
            <section id = "Contacts">
                <Divider/>
                <Contacts/>
            </section>
            
        </>
    )
}

export default Home
