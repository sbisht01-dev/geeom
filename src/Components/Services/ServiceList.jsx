import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../CSS/ServicesList.css';

// --- Icon Imports ---
import MutualFundIcon from '../../assets/icons/mf.svg?react';
import LicIcon from '../../assets/icons/lic.svg?react'; 
import RetirementIcon from '../../assets/icons/retirement.svg?react';
import AnalysisIcon from '../../assets/icons/analysis.svg?react';    
import EstateIcon from '../../assets/icons/estate.svg?react';        
import TaxIcon from '../../assets/icons/tax.svg?react';

const servicesData = [
  {
    id: 'mutual-fund',
    title: 'Mutual Funds',
    subtitle: 'Diversified investment solutions with professional fund management.',
    icon: MutualFundIcon, 
    description: "Build a robust portfolio with our expertly curated mutual fund schemes. From equity for high growth to debt for stability, we simplify SIPs and lump sum investments for long-term wealth creation.",
    features: ["SIP & Lump Sum Options", "Portfolio Rebalancing", "Goal-based Mapping", "Digital KYC Onboarding"],
    footerText: "Ideal for: Investors seeking professional management and disciplined wealth creation."
  },
  {
    id: 'pre-ipo',
    title: 'Pre-IPO Unlisted Shares',
    subtitle: 'Exclusive access to high-potential companies before they go public.',
    icon: AnalysisIcon, 
    description: "Invest in top-tier companies before they hit the stock exchange. We provide access to exclusive unlisted shares, offering a significant head start on market value before the IPO.",
    features: ["Exclusive Pre-IPO Access", "Detailed Valuation Reports", "Early-Stage Advantage", "Transfer Support"],
    footerText: "Ideal for: Aggressive investors looking for high-growth opportunities."
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    subtitle: 'Personalized strategies to manage and preserve your wealth.',
    icon: EstateIcon, 
    description: "Holistic financial stewardship integrating investments, estate planning, and risk management to preserve your legacy and grow your net worth.",
    features: ["Custom Asset Allocation", "Legacy Planning", "Risk Assessment", "Dedicated Manager"],
    footerText: "Ideal for: HNIs and families seeking 360-degree financial care."
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    subtitle: 'Strategic tax saving solutions to maximize post-tax returns.',
    icon: TaxIcon, 
    description: "Optimize your investments under Section 80C and capital gains provisions. Our experts help you keep more of your earnings through legal and efficient tax strategies.",
    features: ["Section 80C & 80D Optimization", "ITR Filing Assistance", "Capital Gains Harvesting", "Compliance Reviews"],
    footerText: "Ideal for: Individuals wanting to minimize tax liability legally."
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Complete health coverage to protect against medical emergencies.',
    icon: RetirementIcon, 
    description: "Ensure access to the best medical care without draining your savings. Comprehensive plans covering hospitalization, critical illness, and family floaters.",
    features: ["Cashless Hospitalization", "Critical Illness Cover", "Family Floater Plans", "Claims Support"],
    footerText: "Ideal for: Safeguarding families against rising healthcare costs."
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: 'Financial security and protection for your loved ones.',
    icon: LicIcon, 
    description: "Secure your family's future with pure term plans or endowment policies that combine protection with savings, ensuring stability even in your absence.",
    features: ["High-cover Term Plans", "Child Education Policies", "Accidental Disability Riders", "Guaranteed Payouts"],
    footerText: "Ideal for: Breadwinners looking to secure their family's future."
  }
];

function ServicesList() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Set Page SEO
    document.title = "Our Services | Mutual Funds, Pre-IPO & Wealth Management | GEEOM";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Detailed financial services by GEEOM Securities: From Mutual Fund SIPs and Pre-IPO shares to strategic Tax Planning and Life Insurance.";
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    /* SEO: itemScope identifies the page content as a collection of services */
    <main className="services-list-section" itemScope itemType="https://schema.org/Service">
      <div className="services-container">
        
        <header className="services-list-intro">
          <h1 className="main-services-title">Financial Expert Solutions</h1>
          <p className="main-services-desc">Explore our specialized financial products designed for wealth preservation and growth.</p>
        </header>

        {servicesData.map((service) => {
          const IconComp = service.icon;
          
          return (
            /* article + itemProp="hasOfferCatalog" helps Google index each service individually */
            <article 
              key={service.id} 
              id={service.id} 
              className="service-long-card"
              itemProp="hasOfferCatalog" 
              itemScope 
              itemType="https://schema.org/OfferCatalog"
            >
              
              <header className="service-card-header">
                <div className="service-icon-wrapper" aria-hidden="true">
                  <IconComp className="service-main-icon" />
                </div>
                <div className="service-header-text">
                  {/* itemProp="name" is the most important tag for service ranking */}
                  <h2 className="service-title" itemProp="name">{service.title}</h2>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </header>

              <section className="service-card-body">
                {/* Keywords inside description help with semantic search */}
                <p className="service-description" itemProp="description">
                  {service.description}
                </p>
                
                <h3 className="features-heading">Key Advantages:</h3> 
                
                <ul className="features-grid">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="check-icon" aria-hidden="true">✓</span> 
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <footer className="service-card-footer">
                <p><strong>Target Audience:</strong> {service.footerText}</p>
              </footer>

            </article>
          );
        })}
      </div>
    </main>
  );
};

export default ServicesList;