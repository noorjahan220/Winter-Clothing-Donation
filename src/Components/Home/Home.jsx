import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import HowItWorks from '../HowItWorks/HowItWorks';

import FAQ from '../F&Q/FAQ';
import Newsletter from '../NewsLeter/NewsLetter';

const Home = () => {
    return (
        <div >
            <section><Banner /></section>
            <section> <AboutUs /></section>
            <section> <HowItWorks /></section>
            <section><FAQ /></section>
            <section><Newsletter/></section>


        </div>
    );
};

export default Home;