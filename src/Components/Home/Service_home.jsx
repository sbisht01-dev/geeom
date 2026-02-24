import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../CSS/ServicesSection.css'; 

// --- Icon Imports ---
import MutualFundIcon from '../../assets/icons/mf.svg?react';
import LifeInsuranceIcon from '../../assets/icons/lic.svg?react';
import HealthInsuranceIcon from '../../assets/icons/retirement.svg?react';
import PreIpoIcon from '../../assets/icons/analysis.svg?react'; 
import WealthIcon from '../../assets/icons/estate.svg?react';   
import TaxIcon from '../../assets/icons/tax.svg?react';         

const servicesList = [
  {
    icon: MutualFundIcon,
    title: 'Mutual Funds',
    description: 'Professional investment solutions to grow your wealth steadily through diversified portfolio management.'
  },
  {
    icon: PreIpoIcon,
    title: 'Pre-IPO Unlisted Shares',
    description: 'Get early access to high-growth companies before they hit the stock market through unlisted equity.'
  },
  {
    icon: WealthIcon,
    title: 'Wealth Management',
    description: 'Holistic financial strategies to manage, grow, and preserve your wealth across global asset classes.'
  },
  {
    icon: TaxIcon,
    title: 'Tax Planning',
    description: 'Expert tax-saving advice to maximize returns and ensure legal compliance with your financial goals.'
  },
  {
    icon: HealthInsuranceIcon,
    title: 'Health Insurance',
    description: 'Secure your family with top-rated medical insurance plans for emergency healthcare coverage.'
  },
  {
    icon: LifeInsuranceIcon,
    title: 'Life Insurance',
    description: 'Protect your family’s financial future with term life and comprehensive life insurance policies.'
  }
];

function Service_home() {
  const location = useLocation();

  // --- SEO Dynamic Meta Update ---
  useEffect(() => {
    // Only update metadata if we are on the Home or Services landing page
    if (location.pathname === "/" || location.pathname === "/services") {
      
      // Update Tab Title
      document.title = "Our Financial Services | Wealth & Tax Planning | GEEOM Securities";

      // Update or Create Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.name = "description";
          document.head.appendChild(metaDesc);
      }
      metaDesc.content = "Explore GEEOM Securities' range of financial solutions: Mutual Funds, Pre-IPO Unlisted Shares, Wealth Management, and Comprehensive Insurance Planning.";
    }
  }, [location.pathname]);

  return (
    /* SEO: itemScope defines this as a Financial Service provider to Google */
    <section 
      className="services-section" 
      aria-labelledby="services-title"
      itemScope 
      itemType="https://schema.org/FinancialService"
    >
      {/* Hidden brand identity for search crawlers */}
      <meta itemProp="name" content="GEEOM Securities" />
      <meta itemProp="areaServed" content="India" />

      {/* --- Header Content --- */}
      <header className="services-header-content">
        <span className="services-tag" role="doc-subtitle">Our Expertise</span>
        <h2 id="services-title" className="services-heading">
          Comprehensive <span itemProp="serviceType">Financial Solutions</span>
        </h2>
        <p className="services-subheading" itemProp="description">
          We offer a full range of <strong>investment strategies</strong> and <strong>insurance planning</strong> 
          designed to help you achieve your goals and secure your future.
        </p>
      </header>

      {/* --- Service Grid --- */}
      <div className="services-grid">
        {servicesList.map((service) => {
          const IconComponent = service.icon;

          return (
            /* SEO: Using 'OfferCatalog' to tell bots these are specific products available for clients */
            <article 
              key={service.title} 
              className="service-card"
              itemProp="hasOfferCatalog" 
              itemScope 
              itemType="https://schema.org/OfferCatalog"
            >
              <div className="card-icon-wrapper" aria-hidden="true">
                <IconComponent className="card-svg-icon" />
              </div>

              {/* itemProp="name" makes the service title searchable */}
              <h3 className="card-title" itemProp="name">
                {service.title}
              </h3>

              <p className="card-description">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* --- View All Action --- */}
      <footer className="services-button-container">
        <Link 
          to="/services" 
          className="services-view-all-btn" 
          aria-label="View all GEEOM Securities financial services"
          title="See our full investment and insurance catalog"
        >
          View All Services &rarr;
        </Link>
      </footer>

    </section>
  );
};

export default Service_home;