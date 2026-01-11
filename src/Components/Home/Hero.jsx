import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import heroBuildingImage from '../../assets/hero-img.jpg';
import '../../CSS/home.css';

function Hero() {
    return (
        <>
            <div
                style={{
                    minHeight: '80vh',
                    width: '100vw',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        left: '0',
                        zIndex: 0, // This is the lowest layer
                        backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(217,161,0,0.1), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(217,161,0,0.1), transparent)
      `,
                        backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
                    }}
                />

                <section className="hero" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="hero-content">

                        <span className="hero-tag">Trusted by 2,000+ clients worldwide</span>

                        <h1 className="hero-heading">
                            Your Financial Future<br />Starts Here
                        </h1>

                        <p className="hero-subtext">
                            Expert financial guidance to help you achieve your goals. From
                            wealth management to retirement planning, we're here to
                            secure your future.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/get-started" className="hero-btn primary">
                                Get Started &rarr;
                            </Link>
                            <Link to="/services" className="hero-btn secondary">
                                Our Services
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-value">Rs 15Cr+</span>
                                <span className="stat-label">Assets Managed</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">30+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">98%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>

                    </div>

                    <div className="hero-image-container">
                        <img src={heroBuildingImage} alt="Modern financial building" className="hero-image" />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Hero;