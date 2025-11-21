// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Footer.css'; // Import the dedicated CSS file

// import FacebookIcon from '../assets/icons/facebook.svg?react';
// import TwitterIcon from '../assets/icons/twitter.svg?react';
// import LinkedInIcon from '../assets/icons/linkedin.svg?react';
// import InstagramIcon from '../assets/icons/instagram.svg?react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        
        {/* --- Column 1: Brand & Socials --- */}
        <div className="footer-column brand">
          <h3 className="footer-heading">GEEOM Securities</h3>
          <p className="footer-description">
            Building financial success through expert guidance and personalized
            solutions since 1999.
          </p>
          {/* <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-link">
              <FacebookIcon className="social-icon" />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <TwitterIcon className="social-icon" />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <LinkedInIcon className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <InstagramIcon className="social-icon" />
            </a>
          </div> */}
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className="footer-column links">
          <h4 className="footer-heading-small">Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        {/* --- Column 3: Services --- */}
        <div className="footer-column links">
          <h4 className="footer-heading-small">Services</h4>
          <Link to="/services/wealth-management" className="footer-link">Wealth Management</Link>
          <Link to="/services/investment-planning" className="footer-link">Investment Planning</Link>
          <Link to="/services/retirement-planning" className="footer-link">Retirement Planning</Link>
          <Link to="/services/estate-planning" className="footer-link">Estate Planning</Link>
          <Link to="/services/tax-strategy" className="footer-link">Tax Strategy</Link>
        </div>

        {/* --- Column 4: Contact --- */}
        <div className="footer-column contact">
          <h4 className="footer-heading-small">Contact</h4>
          <p>123 Financial Plaza<br />New York, NY 10004</p>
          <a href="tel:+15551234567" className="footer-link">+1 (555) 123-4567</a>
          <a href="mailto:info@financehub.com" className="footer-link">info@financehub.com</a>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="footer-bottom">
        <div className="footer-legal">
          <p className="copyright">© {new Date().getFullYear()} GEEOM Securities. All rights reserved.</p>
          <p className="disclaimer">
            Securities offered through registered representatives. Investment advisory services offered through FinanceHub Advisory Services. FinanceHub and its affiliates do not provide tax or legal advice.
          </p>
        </div>
        <div className="footer-policy-links">
          <Link to="/privacy-policy" className="footer-link-small">Privacy Policy</Link>
          <Link to="/terms-of-service" className="footer-link-small">Terms of Service</Link>
          <Link to="/disclaimer" className="footer-link-small">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;