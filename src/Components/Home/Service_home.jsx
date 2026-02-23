// src/Components/Service_home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/ServicesSection.css'; 

// --- Icon Imports ---
import MutualFundIcon from '../../assets/icons/mf.svg?react';
import LifeInsuranceIcon from '../../assets/icons/lic.svg?react';
import HealthInsuranceIcon from '../../assets/icons/retirement.svg?react';

// --- NEW ICONS (Ensure these files exist in your assets folder) ---
// You might need to rename these imports to match your actual file names
import PreIpoIcon from '../../assets/icons/analysis.svg?react'; // Placeholder: Replace with your actual Pre-IPO icon
import WealthIcon from '../../assets/icons/estate.svg?react';   // Placeholder: Replace with your actual Wealth icon
import TaxIcon from '../../assets/icons/tax.svg?react';         // Placeholder: Replace with your actual Tax icon


const servicesList = [
  {
    icon: MutualFundIcon,
    title: 'Mutual Funds',
    description: 'Diversified investment solutions with professional fund management to grow your wealth steadily.'
  },
  {
    icon: PreIpoIcon, // New Service
    title: 'Pre-IPO Unlisted Shares',
    description: 'Exclusive access to high-potential companies before they go public, offering significant growth opportunities.'
  },
  {
    icon: WealthIcon, // New Service
    title: 'Wealth Management',
    description: 'Personalized strategies to manage, grow, and preserve your wealth across various asset classes.'
  },
  {
    icon: TaxIcon, // New Service
    title: 'Tax Planning',
    description: 'Strategic tax saving solutions to maximize your post-tax returns while ensuring full compliance.'
  },
  {
    icon: HealthInsuranceIcon,
    title: 'Health Insurance',
    description: 'Complete health coverage plans to protect you and your family against medical emergencies.'
  },
  {
    icon: LifeInsuranceIcon,
    title: 'Life Insurance',
    description: 'Comprehensive life insurance plans that provide financial security and protection for your loved ones.'
  }
];

const Service_home = () => {
  return (
  <section className="services-section" aria-labelledby="services-title">
      
      {/* --- Header: Grouping the titles for crawlers --- */}
      <header className="services-header-content">
        <span className="services-tag">Our Services</span>
        <h2 id="services-title" className="services-heading">
          Comprehensive Financial Solutions
        </h2>
        <p className="services-subheading">
          We offer a full range of financial services designed to help you achieve 
          your goals and secure your future.
        </p>
      </header>

      {/* --- Grid --- */}
      <div className="services-grid">
        {servicesList.map((service) => {
          const IconComponent = service.icon;

          return (
            /* Using <article> because each service is a self-contained unit of information */
            <article key={service.title} className="service-card">
              <div className="card-icon-wrapper" aria-hidden="true">
                {/* Icons are decorative, aria-hidden prevents screen readers from reading raw SVG code */}
                <IconComponent className="card-svg-icon" />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </article>
          );
        })}
      </div>

      {/* --- Footer: Containing the primary navigation action for this section --- */}
      <footer className="services-button-container">
        <Link to="/services" className="services-view-all-btn" aria-label="View all financial services">
          View All Services &rarr;
        </Link>
      </footer>

    </section>
  );
};

export default Service_home;