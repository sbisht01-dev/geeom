import React from 'react';
import ServicesHero from '../Components/Services/ServiceHero';
import ServicesList from '../Components/Services/ServiceList';
import { useEffect } from 'react';

function Services() {
useEffect(() => {
        document.title = "Our Services | Investment & Security Solutions | GEEOM Securities";
    }, []);
    return (

        <>
            <ServicesHero />
            <ServicesList />
        </>
    );
}

export default Services;
