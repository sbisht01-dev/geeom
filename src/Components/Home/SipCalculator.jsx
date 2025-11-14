import React, { useState, useEffect } from 'react';
import '../../CSS/FinancialCalculators.css'; 

const SipCalculator = () => {
  // State for the inputs
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [period, setPeriod] = useState(10);
  const [rate, setRate] = useState(12);

  // State for the calculated outputs
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  // Function to format numbers to Indian Rupee style (e.g., 1,00,000)
  const formatAsRupee = (number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    const i = (rate / 100) / 12; // Monthly interest rate
    const n = period * 12; // Number of months

    const fv = monthlyInvestment * (Math.pow(1 + i, n) - 1) / i * (1 + i);
    const ti = monthlyInvestment * n;
    const er = fv - ti;

    setFutureValue(fv);
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
        {/* --- Input Fields (Left) --- */}
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

        {/* --- Output Display (Right) --- */}
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
        *Returns are illustrative and based on assumed rate of {`${rate}`}% p.a. Actual returns may vary based on market conditions.
      </p>
    </div>
  );
};

export default SipCalculator;