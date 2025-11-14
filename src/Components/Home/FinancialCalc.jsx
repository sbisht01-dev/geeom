// src/components/FinancialCalculators.jsx

import React from 'react';
import '../../CSS/FinancialCalculators.css'; // We can keep the same CSS file

// Import only the SipCalculator component
import SipCalculator from './SipCalculator';

const FinancialCalculators = () => {
  // No useState or renderCalculator function needed anymore

  return (
    <section className="calculator-section">
      {/* --- Header --- */}
      <div className="calculator-header">
        {/* Changed tag to singular */}
        <span className="services-tag">Financial Calculator</span>
        <h2 className="services-heading">Plan Your Financial Future</h2>
        <p className="services-subheading">
          Use our SIP calculator to get a quick estimate of your investment returns.
        </p>
      </div>
      <div className="calculator-content">
        <SipCalculator />
      </div>
    </section>
  );
};

export default FinancialCalculators;