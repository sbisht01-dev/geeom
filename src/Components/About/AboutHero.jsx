// src/components/about/AboutHero.jsx
import React from 'react';
import '../../CSS/AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        
        {/* --- Badge --- */}
        <span className="about-hero-badge">About Us</span>
        
        {/* --- Main Heading --- */}
        <h1 className="about-hero-title">
          Building Financial <br className="mobile-break" />
          Success Since 1996
        </h1>
        
        {/* --- Subheading --- */}
        <p className="about-hero-desc">
          For over 30 years, we've been helping individuals and families achieve their 
          financial dreams through expert guidance, personalized strategies, and 
          unwavering commitment to excellence.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;