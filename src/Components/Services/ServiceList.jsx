// src/components/ServicesList.jsx
import React from 'react';
import '../../CSS/ServicesList.css';

// --- Import Icons (Replace with your actual SVGs) ---
// Using placeholders for now to ensure the code runs immediately for you
import MutualFundIcon from '../../assets/icons/mf.svg?react';
import LicIcon from '../../assets/icons/lic.svg?react'; 
import RetirementIcon from '../../assets/icons/retirement.svg?react';
import AnalysisIcon from '../../assets/icons/analysis.svg?react';
import EstateIcon from '../../assets/icons/estate.svg?react';
import TaxIcon from '../../assets/icons/tax.svg?react';

const servicesData = [
  {
    id: 'mutual-fund',
    title: 'Mutual Fund',
    subtitle: 'Diversified investment solutions with professional fund management.',
    icon: MutualFundIcon, 
    description: "Unlock the power of wealth creation through our expertly curated mutual fund portfolios. Whether you're saving for equity funds, debt funds, or hybrid funds, we provide comprehensive guidance and active management.",
    features: [
      "Wide range of fund options (Equity, Debt, Hybrid)",
      "Systematic Investment Plan (SIP) facilities",
      "Regular portfolio rebalancing",
      "Performance tracking and consolidated reports",
      "Goal-based savings planning",
      "Zero hassle documentation support"
    ],
    footerText: "Ideal for: Individuals seeking professional wealth creation through disciplined investing."
  },
  {
    id: 'lic',
    title: 'LIC (Life Insurance)',
    subtitle: 'Comprehensive life insurance plans that provide financial security.',
    icon: LicIcon, 
    description: "Life Insurance Corporation (LIC) policies offer both protection and investment benefits, ensuring financial security for your family. We help you choose the right policy that matches your life stage and needs.",
    features: [
      "Term insurance for pure protection",
      "Endowment plans for savings",
      "Money back policies for periodic returns",
      "Pension plans for retirement security",
      "Child plans for education funding",
      "Whole life insurance coverage"
    ],
    footerText: "Ideal for: Protecting your family's financial future against uncertainties."
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    subtitle: 'Secure your future with personalized retirement strategies.',
    icon: RetirementIcon, 
    description: "Planning for retirement requires a strategic approach. We help you determine how much you need to save, optimize your retirement accounts, and create a sustainable income strategy for your golden years.",
    features: [
      "Retirement corpus estimation",
      "NPS and PF consultation",
      "Asset allocation strategies",
      "Inflation-adjusted planning",
      "Post-retirement income planning",
      "Legacy and estate considerations"
    ],
    footerText: "Ideal for: Individuals wanting a stress-free and financially independent retirement."
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis',
    subtitle: 'In-depth financial analysis and reporting to optimize your growth.',
    icon: AnalysisIcon, 
    description: "Understanding your current financial health is crucial for making smart decisions. We provide comprehensive financial analysis to identify gaps, risks, and opportunities in your portfolio.",
    features: [
      "Comprehensive portfolio review",
      "Cash flow modeling and tracking",
      "Risk assessment and mitigation",
      "Debt management advice",
      "Major goal mapping",
      "Personalized growth roadmaps"
    ],
    footerText: "Ideal for: Anyone seeking a clear picture of their financial health and growth opportunities."
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    subtitle: 'Ensure your legacy with professional estate planning services.',
    icon: EstateIcon, 
    description: "Proper estate planning ensures your assets are distributed according to your wishes while minimizing taxes and complications. We guide you through the process of securing your legacy.",
    features: [
      "Will creation and management",
      "Trust setup and advisory",
      "Succession planning",
      "Beneficiary designation",
      "Asset transfer strategies",
      "Legal and tax compliance check"
    ],
    footerText: "Ideal for: Individuals wishing to protect their assets and secure their loved ones."
  },
  {
    id: 'tax-strategy',
    title: 'Tax Strategy',
    subtitle: 'Maximize your wealth with expert tax planning and optimization.',
    icon: TaxIcon, 
    description: "Taxes can significantly impact your investment returns. Our tax experts help you minimize your liability through strategic planning, ensuring full compliance with tax laws.",
    features: [
      "Tax-efficient investment selection",
      "Capital gains optimization",
      "Retirement account tax benefits",
      "Charitable giving strategies",
      "Year-round tax planning",
      "Filing and compliance support"
    ],
    footerText: "Ideal for: Taxpayers looking to optimize their post-tax returns legally."
  }
];

const ServicesList = () => {
  return (
    <section className="services-list-section">
      <div className="services-container">
        {servicesData.map((service) => {
          const IconComp = service.icon;
          
          return (
            <div key={service.id} className="service-long-card">
              
              {/* --- Header --- */}
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <IconComp className="service-main-icon" />
                </div>
                <div className="service-header-text">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>

              {/* --- Body --- */}
              <div className="service-card-body">
                <p className="service-description">{service.description}</p>
                
                <h4 className="features-heading">What's Included:</h4>
                <ul className="features-grid">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="check-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- Footer Bar --- */}
              <div className="service-card-footer">
                <p>{service.footerText}</p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesList;