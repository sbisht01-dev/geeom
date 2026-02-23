// src/components/Footer.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Footer.css';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase"; // Adjust path to your firebase.js file

const Footer = () => {
  // --- State for Contact Info ---
  // Default values act as a "fallback" while the data loads
  const [contactInfo, setContactInfo] = useState({
    addressLine1: "Loading...",
    addressLine2: "",
    addressLine3: "",
    phone: "",
    email: ""
  });

  // --- Fetch Data from Firebase ---
  useEffect(() => {
    // Reference the 'contact_info' node in your JSON
    const contactRef = ref(db, 'contact_info');

    // Subscribe to changes
    const unsubscribe = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContactInfo({
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          addressLine3: data.addressLine3,
          phone: data.phone,
          email: data.email,
        });
      }
    });
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
   <footer className="footer" itemScope itemType="https://schema.org/FinancialService">
      <div className="footer-main">

        {/* --- Column 1: Brand --- */}
        <section className="footer-column brand">
          {/* Using a hidden Meta tag for Schema to identify your official name */}
          <meta itemProp="name" content="GEEOM Securities" />
          <h3 className="footer-heading">GEEOM</h3>
          <p className="footer-description">
            Building financial success through expert guidance and personalized
            solutions.
          </p>
        </section>

        {/* --- Column 2: Quick Links --- */}
        <nav className="footer-column links" aria-label="Footer Quick Links">
          <h4 className="footer-heading-small">Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>

        {/* --- Column 3: Services --- */}
        <nav className="footer-column links" aria-label="Footer Service Links">
          <h4 className="footer-heading-small">Services</h4>
          <Link to="/services/mutual-funds" className="footer-link">Mutual Funds</Link>
          <Link to="/services/wealth-management" className="footer-link">Wealth Management</Link>
          <Link to="/services/insurance" className="footer-link">Insurance</Link>
          <Link to="/services/tax-planning" className="footer-link">Tax Planning</Link>
        </nav>

        {/* --- Column 4: Contact (DYNAMIC FROM FIREBASE) --- */}
        <div className="footer-column contact">
          <h4 className="footer-heading-small">Contact</h4>

          {/* <address> tells Google this is your physical/digital headquarters */}
          <address className="footer-contact-details">
            <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">
                {contactInfo.addressLine1}<br />
                {contactInfo.addressLine2}
              </span><br />
              <span itemProp="addressLocality">{contactInfo.addressLine3}</span>
            </p>

            <a href={`tel:${contactInfo.phone}`} className="footer-link" itemProp="telephone">
              {contactInfo.phone}
            </a>

            <a href={`mailto:${contactInfo.email}`} className="footer-link" itemProp="email">
              {contactInfo.email}
            </a>
          </address>
        </div>

      </div>

      {/* --- Bottom Bar --- */}
      <aside className="footer-bottom">
        <div className="footer-legal">
          <p className="copyright">© {new Date().getFullYear()} GEEOM Securities. All rights reserved.</p>
          <small className="disclaimer">
            Securities offered through registered representatives. Investment advisory services offered through GEEOM Advisory Services.
          </small>
        </div>
        <nav className="footer-policy-links" aria-label="Legal Links">
          <Link to="/privacy-policy" className="footer-link-small">Privacy Policy</Link>
          <Link to="/terms-of-service" className="footer-link-small">Terms of Service</Link>
          <Link to="/disclaimer" className="footer-link-small">Disclaimer</Link>
        </nav>
      </aside>
    </footer>
  );
};

export default Footer;