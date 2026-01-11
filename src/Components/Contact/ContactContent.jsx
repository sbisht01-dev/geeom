// src/components/contact/ContactContent.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import '../../CSS/ContactContent.css';
import ContactForm from './ContactForm';

// --- Icons (Simple SVGs) ---
const PhoneIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const MailIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const MapIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const ClockIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;

const ContactContent = () => {
    // 1. Setup State
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        hoursWeekday: '',
        hoursSaturday: ''
    });
    const [faqs, setFaqs] = useState([]); // State for FAQs
    const [loading, setLoading] = useState(true);

    // 2. Fetch Data
    useEffect(() => {
        const contactRef = ref(db, 'contact_info');
        const hoursRef = ref(db, 'business_hours');
        const faqRef = ref(db, 'FAQ'); // Reference to FAQ node

        let fetchedData = {};
        
        // --- Fetch Contact Info ---
        const unsubscribeContact = onValue(contactRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                fetchedData = { ...fetchedData, ...data };
                updateState(fetchedData);
            }
        });

        // --- Fetch Business Hours ---
        const unsubscribeHours = onValue(hoursRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                fetchedData = {
                    ...fetchedData,
                    hoursWeekday: data.weekdays,
                    hoursSaturday: data.saturday
                };
                updateState(fetchedData);
            }
        });

        // --- Fetch FAQs ---
        const unsubscribeFAQ = onValue(faqRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert object {faq_1: {...}, faq_2: {...}} to array
                const faqArray = Object.values(data);
                setFaqs(faqArray);
            }
        });

        const updateState = (data) => {
            setContactInfo(prev => ({
                ...prev,
                phone: data.phone || prev.phone,
                email: data.email || prev.email,
                addressLine1: data.addressLine1 || prev.addressLine1,
                addressLine2: data.addressLine2 || prev.addressLine2,
                addressLine3: data.addressLine3 || prev.addressLine3,
                hoursWeekday: data.hoursWeekday || prev.hoursWeekday,
                hoursSaturday: data.hoursSaturday || prev.hoursSaturday
            }));
            setLoading(false);
        };

        return () => {
            unsubscribeContact();
            unsubscribeHours();
            unsubscribeFAQ();
        };
    }, []);

    return (
        <>
            <section className="contact-content-section">
                <div className="contact-container">

                    {/* --- Top Row: Contact Cards --- */}
                    <div className="contact-cards-grid">
                        <div className="contact-card">
                            <div className="icon-box"><PhoneIcon /></div>
                            <h3>Call Us</h3>
                            <p className="contact-link">
                                {loading ? <span className="skeleton-text short"></span> : `+91 ${contactInfo.phone}`}
                            </p>
                            <span className="contact-sub">Mon-Fri, 9am-6pm IST</span>
                        </div>

                        <div className="contact-card">
                            <div className="icon-box"><MailIcon /></div>
                            <h3>Email Us</h3>
                            <p className="contact-link">
                                {loading ? <span className="skeleton-text short"></span> : contactInfo.email}
                            </p>
                            <span className="contact-sub">We respond within 24 hours</span>
                        </div>

                        <div className="contact-card">
                            <div className="icon-box"><MapIcon /></div>
                            <h3>Visit Us</h3>
                            <p className="contact-link" style={{ fontSize: '13px' }}>
                                {loading ? <span className="skeleton-text"></span> : contactInfo.addressLine1}
                            </p>
                            <span className="contact-sub">
                                {loading ? <span className="skeleton-text short"></span> : `${contactInfo.addressLine2}`}
                            </span>
                            <span className="contact-sub">
                                <br/>  {loading ? <span className="skeleton-text short"></span> : `${contactInfo.addressLine3}`}
                            </span>
                        </div>

                        <div className="contact-card">
                            <div className="icon-box"><ClockIcon /></div>
                            <h3>Office Hours</h3>
                            <p className="contact-link" style={{ fontSize: '13px' }}>
                                {loading ? <span className="skeleton-text short"></span> : `Mon-Fri: ${contactInfo.hoursWeekday}`}
                            </p>
                            <span className="contact-sub">
                                {loading ? <span className="skeleton-text short"></span> : `Sat: ${contactInfo.hoursSaturday}`}
                            </span>
                        </div>
                    </div>

                    {/* --- Main Content Split --- */}
                    <div className="contact-main-split">

                        {/* LEFT: Contact Form */}
                        <ContactForm />

                        {/* RIGHT: Sidebar Info */}
                        <div className="contact-sidebar">

                            {/* Yellow Info Card */}
                            <div className="sidebar-info-card yellow-card">
                                <h3>Why Choose GEEOM?</h3>
                                <ul className="info-list">
                                    <li>• Free initial consultation with no obligation</li>
                                    <li>• Certified professionals with 25+ years experience</li>
                                    <li>• Personalized solutions tailored to your situation</li>
                                    <li>• 98% client satisfaction and retention rate</li>
                                </ul>
                            </div>

                            {/* FAQ / Quick Questions (Dynamic from DB) */}
                            <div className="sidebar-info-card faq-card">
                                <h3>Quick Questions</h3>
                                
                                {loading || faqs.length === 0 ? (
                                    // Skeleton Loader for FAQs
                                    <>
                                        <div className="faq-item">
                                            <div className="faq-bar"></div>
                                            <div style={{width: '100%'}}>
                                                <div className="skeleton-text short" style={{marginBottom: '10px'}}></div>
                                                <div className="skeleton-text"></div>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-bar"></div>
                                            <div style={{width: '100%'}}>
                                                <div className="skeleton-text short" style={{marginBottom: '10px'}}></div>
                                                <div className="skeleton-text"></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Actual Data Mapping
                                    faqs.map((faq, index) => (
                                        <div className="faq-item" key={index}>
                                            <div className="faq-bar"></div>
                                            <div>
                                                {/* Accessing Capitalized Keys as per your DB image */}
                                                <h4>{faq.Question}</h4>
                                                <p>{faq.Answer}</p>
                                            </div>
                                        </div>
                                    ))
                                )}

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* --- Google Map Section --- */}
            <div style={{
                width: '100%',
                marginTop: '60px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                backgroundColor: '#E5E7EB',
                height: '400px',
                position: 'relative',
                boxSizing: 'border-box'
            }}>
                <iframe
                    title="GEEOM Office Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d597571.5247121726!2d84.67765880697372!3d22.113816799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1fbe30d762905d%3A0xad4c2976bc70d4b2!2sKendriya%20Vidyalaya%20Meghahatuburu!5e1!3m2!1sen!2sin!4v1768173633755!5m2!1sen!2sin"
                    style={{ filter: 'grayscale(0%)', border: 'none' }}
                    allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
};

export default ContactContent;