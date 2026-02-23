// src/components/ServicesList.jsx
import React from 'react';
import '../../CSS/ServicesList.css';

// --- Import Icons (Ensure these exist in your assets folder) ---
import MutualFundIcon from '../../assets/icons/mf.svg?react';
import LicIcon from '../../assets/icons/lic.svg?react'; 
import RetirementIcon from '../../assets/icons/retirement.svg?react'; // Used for Health/Life placeholder
import AnalysisIcon from '../../assets/icons/analysis.svg?react';    // Used for Pre-IPO
import EstateIcon from '../../assets/icons/estate.svg?react';        // Used for Wealth Mgmt
import TaxIcon from '../../assets/icons/tax.svg?react';

const servicesData = [
  {
    id: 'mutual-fund',
    title: 'Mutual Funds',
    subtitle: 'Diversified investment solutions with professional fund management to grow your wealth steadily.',
    icon: MutualFundIcon, 
    description: "Build a robust portfolio with our expertly curated mutual fund schemes. Whether you are looking for high-growth equity funds, stable debt funds, or balanced hybrid options, we help you invest with discipline through SIPs or lump sums to achieve your long-term goals.",
    features: [
      "Curated Equity, Debt, & Hybrid funds",
      "Systematic Investment Plans (SIP)",
      "Periodic portfolio rebalancing",
      "Goal-based investment mapping",
      "Detailed performance tracking",
      "Hassle-free digital KYC & onboarding"
    ],
    footerText: "Ideal for: Investors seeking professional management and disciplined wealth creation."
  },
  {
    id: 'pre-ipo',
    title: 'Pre-IPO Unlisted Shares',
    subtitle: 'Exclusive access to high-potential companies before they go public, offering significant growth opportunities.',
    icon: AnalysisIcon, 
    description: "Get a head start on the market by investing in high-growth companies before they list on the stock exchange. We provide access to exclusive unlisted shares of top-tier companies, allowing you to unlock immense value early in their growth journey.",
    features: [
      "Access to top-tier unlisted companies",
      "Detailed company valuation reports",
      "Early-stage entry advantage",
      "Guidance on exit strategies",
      "Seamless transfer & holding support",
      "Regular updates on IPO timelines"
    ],
    footerText: "Ideal for: Aggressive investors looking for high-growth opportunities beyond the stock market."
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    subtitle: 'Personalized strategies to manage, grow, and preserve your wealth across various asset classes.',
    icon: EstateIcon, 
    description: "True wealth management goes beyond just investing. We take a holistic view of your financial life—integrating investments, estate planning, and risk management—to build a comprehensive strategy that preserves your legacy and grows your net worth.",
    features: [
      "Customized asset allocation",
      "Portfolio risk assessment",
      "Retirement & legacy planning",
      "Cash flow management",
      "Regular financial health checkups",
      "Dedicated relationship manager"
    ],
    footerText: "Ideal for: HNIs and families seeking 360-degree financial stewardship."
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    subtitle: 'Strategic tax saving solutions to maximize your post-tax returns while ensuring full compliance.',
    icon: TaxIcon, 
    description: "Don't let taxes erode your hard-earned returns. Our experts help you navigate the complex tax landscape with legal, efficient strategies. We optimize your investments under Section 80C, capital gains, and other provisions to ensure you keep more of what you earn.",
    features: [
      "Section 80C & 80D optimization",
      "Capital gains tax harvesting",
      "Tax-efficient investment selection",
      "ITR filing assistance",
      "Compliance review & auditing",
      "Year-end tax saving strategies"
    ],
    footerText: "Ideal for: Salaried and business individuals wanting to minimize tax liability legally."
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Complete health coverage plans to protect you and your family against medical emergencies.',
    icon: RetirementIcon, // Using RetirementIcon as a placeholder for Health/Protection
    description: "Medical emergencies can strike without warning. Our comprehensive health insurance plans ensure that you have access to the best medical care without draining your savings. From cashless hospitalization to critical illness covers, we secure your physical and financial health.",
    features: [
      "Cashless hospitalization network",
      "Critical illness cover",
      "Family floater plans",
      "Pre & post-hospitalization cover",
      "Annual health checkup benefits",
      "Claims settlement support"
    ],
    footerText: "Ideal for: Every individual and family to safeguard against rising healthcare costs."
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: 'Comprehensive life insurance plans that provide financial security and protection for your loved ones.',
    icon: LicIcon, 
    description: "Secure your family's future even in your absence. We offer a range of life insurance products—from pure term plans for high coverage to endowment and money-back policies that combine protection with savings—ensuring your loved ones are always financially stable.",
    features: [
      "High-cover Term Insurance",
      "Endowment & Savings plans",
      "Child education policies",
      "Whole life coverage options",
      "Riders for accidental disability",
      "Guaranteed payout benefits"
    ],
    footerText: "Ideal for: Breadwinners looking to secure their family's financial future."
  }
];

const ServicesList = () => {
  return (
   <main className="services-list-section">
      <div className="services-container">
        {servicesData.map((service) => {
          const IconComp = service.icon;
          
          return (
            /* article is perfect here as each service is a self-contained content piece */
            <article key={service.id} className="service-long-card">
              
              {/* --- Header --- */}
              <header className="service-card-header">
                <div className="service-icon-wrapper" aria-hidden="true">
                  <IconComp className="service-main-icon" />
                </div>
                <div className="service-header-text">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </header>

              {/* --- Body --- */}
              <section className="service-card-body">
                <p className="service-description">{service.description}</p>
                
                <h3 className="features-heading">What's Included:</h3> 
                {/* Note: Changed h4 to h3 for better SEO hierarchy under h2 */}
                
                <ul className="features-grid">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="check-icon" aria-hidden="true">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* --- Footer Bar --- */}
              <footer className="service-card-footer">
                <p>{service.footerText}</p>
              </footer>

            </article>
          );
        })}
      </div>
    </main>
  );
};

export default ServicesList;