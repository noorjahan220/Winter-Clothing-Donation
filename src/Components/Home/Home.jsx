import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import HowItWorks from '../HowItWorks/HowItWorks';

import FAQ from '../F&Q/FAQ';

const Home = () => {
    return (
        <div >
            <section><Banner /></section>
            <section> <AboutUs /></section>
            <section> <HowItWorks /></section>
            <section><FAQ /></section>


        </div>
    );
};

export default Home;