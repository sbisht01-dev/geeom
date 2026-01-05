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
          {/* Dynamic Phone Link for the Button */}
          <a href={`tel:${contactData.phone}`} className="cta-btn secondary">
            📞 Call Us Now
          </a>
        </div>

        {/* --- Divider --- */}
        <hr className="cta-divider" />

        {/* --- Contact Info --- */}
        <div className="cta-contact-info">
          {/* Dynamic Phone Link */}
          <a href={`tel:${contactData.phone}`} className="cta-contact-link">
            <PhoneIcon className="cta-contact-icon" />
            {contactData.phone}
          </a>
          
          {/* Dynamic Email Link */}
          <a href={`mailto:${contactData.email}`} className="cta-contact-link">
            <EmailIcon className="cta-contact-icon" />
            {contactData.email}
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;