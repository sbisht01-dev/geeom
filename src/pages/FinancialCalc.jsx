// src/components/FinancialCalculators.jsx

import React, { useState } from 'react';
import '../CSS/FinancialCalculators.css'; // We will create this CSS

// Import the three calculator components
import SipCalculator from '../Components/SipCalculator';
import InsuranceCalculator from '../Components/InsuranceCalculator';
import FixedDepositCalculator from '../Components/FixedDepositCalculator';

const FinancialCalculators = () => {
  // State to manage which tab is active. 'sip' is the default.
  const [activeTab, setActiveTab] = useState('sip');

  // Function to render the correct calculator component
  const renderCalculator = () => {
    switch (activeTab) {
      case 'sip':
        return <SipCalculator />;
      case 'insurance':
        return <InsuranceCalculator />;
      case 'fd':
        return <FixedDepositCalculator />;
      default:
        return <SipCalculator />;
    }
  };

  return (
    <section className="calculator-section">
      {/* --- Header --- */}
      <div className="calculator-header">
        <span className="services-tag">Financial Calculators</span>
        <h2 className="services-heading">Plan Your Financial Future</h2>
        <p className="services-subheading">
          Use our calculators to get a quick estimate of your investment returns and
          insurance needs.
        </p>
      </div>

      {/* --- Tab Navigation --- */}
      <div className="calculator-tabs">
        <button
          className={`tab-btn ${activeTab === 'sip' ? 'active' : ''}`}
          onClick={() => setActiveTab('sip')}
        >
          {/* You can replace this with an icon */}
          📈 SIP Calculator
        </button>
        <button
          className={`tab-btn ${activeTab === 'insurance' ? 'active' : ''}`}
          onClick={() => setActiveTab('insurance')}
        >
          {/* You can replace this with an icon */}
          🛡️ Insurance
        </button>
        <button
          className={`tab-btn ${activeTab === 'fd' ? 'active' : ''}`}
          onClick={() => setActiveTab('fd')}
        >
          {/* You can replace this with an icon */}
          🏦 Fixed Deposit
        </button>
      </div>

      {/* --- Active Calculator Content --- */}
      <div className="calculator-content">
        {renderCalculator()}
      </div>
    </section>
  );
};

export default FinancialCalculators;