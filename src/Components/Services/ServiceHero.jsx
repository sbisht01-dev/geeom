// src/components/ServicesHero.jsx
import React from 'react';
import '../../CSS/ServicesHero.css';

const ServicesHero = () => {
  return (
    <section className="services-hero-section">
      <div className="hero-container">
        {/* --- Tagline --- */}
        <span className="hero-tag">Our Services</span>
        
        {/* --- Main Heading --- */}
        <h1 className="hero-heading">
          Comprehensive <br className="desktop-only" /> Financial Solutions
        </h1>
        
        {/* --- Subheading --- */}
        <p className="hero-subheading">
          We offer a full suite of financial services designed to help you achieve your goals, 
          protect your wealth, and secure your financial future.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;