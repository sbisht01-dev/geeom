import React from 'react';
import AboutHero from '../Components/About/AboutHero';
import AboutStory from '../Components/About/AboutStory.jsx';
import OurTeam from '../Components/Services/OurTeam.jsx';
import { useEffect } from 'react';

function AboutUs() {
    useEffect(() => {
        document.title = "About Us | Our Mission & Expertise | GEEOM Securities";
    }, []);
    return (
        <>
            <AboutHero />
            <OurTeam />
            <AboutStory />
        </>
    );
}

export default AboutUs;
