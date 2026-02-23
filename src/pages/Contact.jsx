import React from 'react';
import ContactHero from '../Components/Contact/ContactHero.jsx';
import ContactContent from '../Components/Contact/ContactContent.jsx';
import { useEffect } from 'react';

function ContactUs() {
    useEffect(() => {
        document.title = "Contact Us | Get a Complimentary Consultation | GEEOM Securities";
    }, []);
    return (

        <>
            <ContactHero />
            <ContactContent />
        </>
    );
}

export default ContactUs;
