import React from 'react'
import Header from "./Navbar";
import About from './About';

const Divider = () => {
    return (
        <hr
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
    );
};

const Home = () => {
    return (
        <>
            <Header/>
            <About/>
            <Divider/>
        </>
    )
}

export default Home
