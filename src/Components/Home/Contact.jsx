// src/components/ContactCTA.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Use for internal links
import '../../CSS/Contact.css'; // Import the dedicated CSS file

// --- Import your SVG icons ---
import PhoneIcon from '../../assets/icons/phone.svg?react';
import EmailIcon from '../../assets/icons/email.svg?react';

const ContactCTA = () => {
  return (
    <section className="cta-section-wrapper">
      <div className="cta-section">
        
        {/* --- Header --- */}
        <h2 className="cta-heading">Ready to Get Started?</h2>
        <p className="cta-subheading">
          Take the first step towards financial freedom. Schedule a complimentary
          consultation with our expert advisors today.
        </p>

        {/* --- Buttons --- */}
        <div className="cta-buttons">
          <Link to="/schedule" className="cta-btn primary">
            Schedule Consultation &rarr;
          </Link>
          {/* Use <a> for an external phone link */}
          <a href="tel:+15551234567" className="cta-btn secondary">
            {/* You can add an inline SVG/icon here if you like */}
            📞 Call Us Now
          </a>
        </div>

        {/* --- Divider --- */}
        <hr className="cta-divider" />

        {/* --- Contact Info --- */}
        <div className="cta-contact-info">
          <a href="tel:+15551234567" className="cta-contact-link">
            <PhoneIcon className="cta-contact-icon" />
            +1 (555) 123-4567
          </a>
          <a href="mailto:info@financehub.com" className="cta-contact-link">
            <EmailIcon className="cta-contact-icon" />
            info@financehub.com
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;