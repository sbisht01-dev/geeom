import React, { useState } from "react";
// import '../../CSSContactContent.css'; // Ensure this points to your CSS file

function ContactForm() {
    // 1. Setup State for Form including new Date & Time fields
    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        phone: '', 
        contactDate: '', 
        contactTime: '', 
        subject: '', 
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Just for testing, log the data to see the date/time
        console.log("Form Submitted:", formData);
        alert(`Message sent! We'll contact you on ${formData.contactDate} during ${formData.contactTime}.`);
        // Add your logic to push formData to a 'messages' node in Firebase
    };

    // Helper to get today's date string for the "min" attribute (prevent past dates)
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    return (
        <div className="contact-form-wrapper">
            <div className="form-header">
                <span className="msg-icon">💬</span>
                <h2>Send us a message</h2>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="John Doe" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="john@example.com" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+91 99999 99999" 
                        value={formData.phone} 
                        onChange={handleChange} 
                    />
                </div>

                {/* --- NEW SECTION: Date & Time Selection --- */}
                <div className="form-row-split">
                    <div className="form-group">
                        <label>Preferred Date</label>
                        <input 
                            type="date" 
                            name="contactDate" 
                            min={getTodayDate()} 
                            value={formData.contactDate} 
                            onChange={handleChange} 
                            style={{ cursor: 'pointer' }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Time Slot</label>
                        <select 
                            name="contactTime" 
                            value={formData.contactTime} 
                            onChange={handleChange}
                            style={{ cursor: 'pointer', appearance: 'auto' }}
                        >
                            <option value="" disabled>Select a range</option>
                            <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                            <option value="Afternoon (12pm - 3pm)">Afternoon (12pm - 3pm)</option>
                            <option value="Evening (3pm - 6pm)">Evening (3pm - 6pm)</option>
                            <option value="Anytime">Anytime</option>
                        </select>
                    </div>
                </div>
                {/* ------------------------------------------ */}

                <div className="form-group">
                    <label>Subject *</label>
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="What can we help you with?" 
                        required 
                        value={formData.subject} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Message *</label>
                    <textarea 
                        name="message" 
                        rows="4" 
                        placeholder="Tell us about your financial goals..." 
                        required 
                        value={formData.message} 
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
                <p className="form-note">We'll respond within 24 hours</p>
            </form>
        </div>
    );
}

export default ContactForm;