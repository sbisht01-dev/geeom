// src/components/ServicesHero.jsx
import React from 'react';
import '../../CSS/ServicesHero.css';

const ServicesHero = () => {
  return (
  <header className="services-hero-section">
      <div className="hero-container">
        {/* --- Tagline: Using a span with a role for context --- */}
        <span className="hero-tag" role="doc-subtitle">Our Services</span>
        
        {/* --- Main Heading: The most important SEO tag on the page --- */}
        <h1 className="hero-heading">
          Comprehensive <br className="desktop-only" aria-hidden="true" /> Financial Solutions
        </h1>
        
        {/* --- Subheading --- */}
        <p className="hero-subheading">
          We offer a full suite of financial services designed to help you achieve your goals, 
          protect your wealth, and secure your financial future.
        </p>
      </div>
    </header>
  );
};

export default ServicesHero;