// src/components/about/AboutStory.jsx
import React from 'react';
import '../../CSS/AboutStory.css';
import StoryImage from '../../assets/our-story-meeting.jpeg';
import AssetsIcon from '../../assets/icons/assets-icon.svg?react';
import ClientsIcon from '../../assets/icons/clients-icon.svg?react';
import YearsIcon from '../../assets/icons/years-icon.svg?react';
import RetentionIcon from '../../assets/icons/retention-icon.svg?react';


const AboutStory = () => {
    const TargetIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fcc419" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
    const EyeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fcc419" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
    const HeartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fcc419" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    const UserIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fcc419" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;

    const valuesData = [
        {
            icon: <TargetIcon />,
            title: "Client-First Approach",
            desc: "We put your interests first in every decision we make, acting as fiduciaries to ensure your financial success."
        },
        {
            icon: <EyeIcon />,
            title: "Transparency",
            desc: "Clear communication and transparent fee structures mean you always know exactly what you're paying for."
        },
        {
            icon: <HeartIcon />,
            title: "Integrity",
            desc: "We uphold the highest ethical standards and maintain the trust our clients place in us."
        },
        {
            icon: <UserIcon />,
            title: "Personalized Service",
            desc: "Every client receives tailored solutions designed specifically for their unique financial situation and goals."
        }
    ];

    const statsData = [
        {
            icon: AssetsIcon,
            value: 'Rs 15Cr+',
            label: 'Assets Under Management',
            description: 'Trusted with thousands of client'
        },
        {
            icon: ClientsIcon,
            value: '2,000+',
            label: 'Satisfied Clients',
            description: 'Helping individuals and families'
        },
        {
            icon: YearsIcon,
            value: '30+',
            label: 'Years of Excellence',
            description: 'Industry-leading experience'
        },
        {
            icon: RetentionIcon,
            value: '98%',
            label: 'Client Retention',
            description: 'Exceptional client satisfaction'
        },
    ];

    return (
        <>
            <section className="about-story-section">
                <div className="about-story-container">

                    {/* --- Left Column: Image --- */}
                    <div className="story-image-wrapper">
                        <img
                            src={StoryImage}
                            alt="Team meeting discussing financial strategies"
                            className="story-img"
                        />
                        {/* Optional: Decorative background element if needed */}
                        <div className="story-img-backdrop"></div>
                    </div>

                    {/* --- Right Column: Content --- */}
                    <div className="story-content">
                        <h2 className="story-title">Our Story</h2>

                        <div className="story-text">
                            <p>
                                GEEOM was founded with a simple mission: to provide accessible,
                                expert financial guidance to help people achieve their dreams. What started
                                as a small advisory firm has grown into a trusted partner for over 2,000
                                clients nationwide.
                            </p>
                            <p>
                                Our founder recognized that many people felt overwhelmed by financial planning
                                and lacked access to personalized, trustworthy advice. She assembled a team
                                of certified professionals who shared her vision of putting clients first
                                and making financial planning transparent and approachable.
                            </p>
                            <p>
                                Today, we manage over ₹15Cr in client assets and maintain a 98%
                                client retention rate. Our success is measured not in numbers alone, but
                                in the peace of mind and financial security we help our clients achieve.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="values-section">
                <div className="values-container">
                    <div className="section-header">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                    </div>

                    <div className="values-grid">
                        {valuesData.map((val, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon-box">{val.icon}</div>
                                <h3 className="value-title">{val.title}</h3>
                                <p className="value-desc">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="track-record-section">
                <div className="track-record-header">
                    <h2 className="track-record-heading">Our Track Record</h2>
                    <p className="track-record-subheading">
                        Numbers that speak to our commitment and success
                    </p>
                </div>

                <div className="track-record-grid">
                    {statsData.map((stat, index) => {
                        // --- 3. Store the icon component ---
                        const IconComponent = stat.icon;

                        return (
                            <div key={index} className="track-record-card">

                                {/* --- 4. Render the SVG component --- */}
                                <div className="card-icon-wrapper-yellow">
                                    <IconComponent className="card-svg-icon-blue" />
                                </div>

                                <h3 className="card-value">{stat.value}</h3>
                                <p className="card-label">{stat.label}</p>
                                <p className="card-description">{stat.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>

    );
};

export default AboutStory;