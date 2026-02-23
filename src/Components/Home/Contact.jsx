// src/components/ContactCTA.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Contact.css';

// Firebase Imports
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

// SVG Icons
import PhoneIcon from '../../assets/icons/phone.svg?react';
import EmailIcon from '../../assets/icons/email.svg?react';

const ContactCTA = () => {
  // --- 1. State for Dynamic Contact Data ---
  const [contactData, setContactData] = useState({
    phone: "Loading...",
    email: "Loading..."
  });

  // --- 2. Fetch Data from Firebase ---
  useEffect(() => {
    const contactRef = ref(db, 'contact_info');

    const unsubscribe = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContactData({
          phone: data.phone,
          email: data.email,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="cta-section-wrapper" aria-labelledby="cta-title">
      <div className="cta-section" itemScope itemType="https://schema.org/FinancialService">

        {/* --- Header --- */}
        <header>
          <h2 id="cta-title" className="cta-heading">Ready to Get Started?</h2>
          <p className="cta-subheading">
            Take the first step towards financial freedom. Schedule a complimentary
            consultation with our expert advisors today.
          </p>
        </header>

        {/* --- Buttons --- */}
        <nav className="cta-buttons" aria-label="CTA Actions">
          <Link to="/schedule" className="cta-btn primary">
            Schedule Consultation &rarr;
          </Link>
          {/* Dynamic Phone Link for the Button */}
          <a href={`tel:${contactData.phone}`} className="cta-btn secondary">
            <span aria-hidden="true">📞</span> Call Us Now
          </a>
        </nav>

        {/* --- Divider --- */}
        <hr className="cta-divider" aria-hidden="true" />

        {/* --- Contact Info --- */}
        {/* Using <address> is the semantic standard for contact information */}
        <address className="cta-contact-info">
          {/* Dynamic Phone Link with Schema markup */}
          <a href={`tel:${contactData.phone}`} className="cta-contact-link" itemProp="telephone">
            <PhoneIcon className="cta-contact-icon" aria-hidden="true" />
            {contactData.phone}
          </a>

          {/* Dynamic Email Link with Schema markup */}
          <a href={`mailto:${contactData.email}`} className="cta-contact-link" itemProp="email">
            <EmailIcon className="cta-contact-icon" aria-hidden="true" />
            {contactData.email}
          </a>
        </address>

      </div>
    </section>
  );
};

export default ContactCTA;