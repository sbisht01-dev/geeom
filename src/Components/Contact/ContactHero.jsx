// src/components/contact/ContactHero.jsx
import React from 'react';
import '../../CSS/ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-container">
        
        {/* --- Yellow Badge --- */}
        <span className="contact-badge">Contact Us</span>
        
        {/* --- Main Heading --- */}
        <h1 className="contact-title">
          Let's Start Your <br className="mobile-break" />
          Financial Journey
        </h1>
        
        {/* --- Description --- */}
        <p className="contact-desc">
          We're here to answer your questions and help you take the first step towards financial 
          success. Reach out today for a complimentary consultation.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;