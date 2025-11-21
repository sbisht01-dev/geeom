// src/Components/Service_home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// Make sure you have a corresponding CSS file
import '../../CSS/ServicesSection.css'; 

import MutualFundIcon from '../../assets/icons/mf.svg?react';
import LifeInsuranceIcon from '../../assets/icons/lic.svg?react';
import HealthInsuranceIcon from '../../assets/icons/retirement.svg?react';
import GeneralInsuranceIcon from '../../assets/icons/analysis.svg?react';
// import EstateIcon from '../../assets/icons/estate.svg?react';
// import TaxIcon from '../../assets/icons/tax.svg?react';


const servicesList = [
  {
    icon: MutualFundIcon,
    title: 'Mutual Fund',
    description: 'Diversified investment solutions with professional fund management to grow your wealth steadily.'
  },
  {
    icon: HealthInsuranceIcon, // Make sure to import/create this icon
    title: 'Health Insurance',
    description: 'Complete health coverage plans to protect you and your family against medical emergencies and hospitalization costs.'
  },
  {
    icon: LifeInsuranceIcon,
    title: 'Life Insurance',
    description: 'Comprehensive life insurance plans that provide financial security and protection for your loved ones.'
  },
  {
    icon: GeneralInsuranceIcon, // Make sure to import/create this icon
    title: 'General Insurance',
    description: 'Protection for your non-life assets including vehicle, home, and travel insurance against unforeseen events.'
  }
];

// Renamed component to match your file
const Service_home = () => {
  return (
    <section className="services-section">
      
      {/* --- Header --- */}
      <div className="services-header-content">
        <span className="services-tag">Our Services</span>
        <h2 className="services-heading">
          Comprehensive Financial Solutions
        </h2>
        <p className="services-subheading">
          We offer a full range of financial services designed to help you achieve 
          your goals and secure your future.
        </p>
      </div>

      {/* --- 6-Card Grid --- */}
      <div className="services-grid">
        {servicesList.map((service) => {
          const IconComponent = service.icon;

          return (
            <div key={service.title} className="service-card">
              <div className="card-icon-wrapper">
                <IconComponent className="card-svg-icon" />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          );
        })}
      </div>

      {/* --- "View All" Button --- */}
      <div className="services-button-container">
        <Link to="/services" className="services-view-all-btn">
          View All Services &rarr;
        </Link>
      </div>

    </section>
  );
};

export default Service_home;