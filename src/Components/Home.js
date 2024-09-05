import React from 'react'
import Header from "./Navbar";
import About from './About';
import { Container } from 'react-bootstrap';
import Showcase from './Showcase';

const Divider = () => {
    return (
        <hr class='divider'></hr>
    );
};

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
            <About/>
            <Divider/>
            </Container>
            <Showcase/>
        </>
    )
}

export default Home
