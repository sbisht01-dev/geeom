import React, { useState, useEffect } from 'react';
import '../../CSS/FinancialCalculators.css'; 

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [period, setPeriod] = useState(10);
  const [rate, setRate] = useState(12);

  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const formatAsRupee = (number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    // 1. Calculate Monthly Rate based on Effective Annual Rate (CAGR)
    // Formula: (1 + r)^(1/12) - 1
    // This matches Groww's logic where 12% means exactly 12% growth per year, not 12.68%
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    
    const n = period * 12; 

    let fv = 0;
    // Handle case where rate is 0 to avoid division by zero/NaN
    if (rate === 0) {
      fv = monthlyInvestment * n;
    } else {
      // SIP Future Value Formula (Annuity Due - Investment at start of month)
      fv = monthlyInvestment * ( (Math.pow(1 + i, n) - 1) / i ) * (1 + i);
    }
    
    const ti = monthlyInvestment * n;

    // 2. Rounding Logic
    // Round the Total Value first to standard integer
    const roundedFv = Math.round(fv);
    
    // Calculate Returns by subtracting Investment from Total
    // This guarantees that (Investment + Returns) always equals Total in the display
    const er = roundedFv - ti;

    setFutureValue(roundedFv);
    setTotalInvestment(ti);
    setEstimatedReturns(er);

  }, [monthlyInvestment, period, rate]);

  return (
    <div className="calculator-wrapper">
      <h3 className="calc-title">Mutual Fund SIP Calculator</h3>
      <p className="calc-subtitle">
        Calculate your potential returns from Systematic Investment Plan (SIP) at {`${rate}`}% annual return
      </p>

      <div className="calculator-body">
        {/* --- Input Fields --- */}
        <div className="calculator-inputs">
          <div className="input-group">
            <label htmlFor="monthlyInvestment">Monthly Investment (₹)</label>
            <input
              type="number"
              id="monthlyInvestment"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="period">Investment Period (Years)</label>
            <input
              type="number"
              id="period"
              value={period}
              onChange={(e) => setPeriod(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="rate">Expected Return Rate (p.a.)</label>
            <input
              type="number"
              id="rate"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
        </div>

        {/* --- Output Display --- */}
        <div className="calculator-outputs">
          <div className="output-box">
            <span className="output-label">Total Investment</span>
            <span className="output-value">{formatAsRupee(totalInvestment)}</span>
          </div>
          <div className="output-box">
            <span className="output-label">Estimated Returns</span>
            <span className="output-value">{formatAsRupee(estimatedReturns)}</span>
          </div>
          <div className="output-box total">
            <span className="output-label">Future Value</span>
            <span className="output-value">{formatAsRupee(futureValue)}</span>
          </div>
        </div>
      </div>
      <p className="calculator-note">
        *Returns are calculated using CAGR methodology matching standard market tools.
      </p>
    </div>
  );
};

export default SipCalculator;