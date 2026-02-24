import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBuildingImage from '../../assets/hero-img.jpg';
import '../../CSS/home.css';

function Hero() {
    useEffect(() => {
        // 1. Update Page Title
        document.title = "GEEOM Securities | Expert Wealth Management & Financial Planning";

        // 2. Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = "GEEOM Securities offers trusted financial guidance, wealth management, and retirement planning. Secure your future with our 30+ years of expertise.";

        // 3. Update Open Graph Tags (for Social Media Sharing)
        const updateOG = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.content = content;
        };

        updateOG('og:title', 'GEEOM Securities - Financial Future Starts Here');
        updateOG('og:description', 'Expert financial guidance to help you achieve your goals with Rs 15Cr+ assets managed.');
    }, []);

    // 4. Schema.org Structured Data for Search Result "Rich Snippets"
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "GEEOM Securities",
        "description": "Expert wealth management and retirement planning services.",
        "image": heroBuildingImage,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "knowsAbout": ["Wealth Management", "Retirement Planning", "Securities"],
        "foundingDate": "1996" // Calculated based on 30+ years
    };

    return (
        <>
            {/* Injecting Structured Data into the Head */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            <div
                style={{
                    minHeight: '80vh',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden'
                }}
            >
                {/* Background Grid & Gradients */}
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        left: '0',
                        zIndex: 0,
                        backgroundImage: `
                            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
                            radial-gradient(circle 500px at 0% 20%, rgba(217,161,0,0.1), transparent),
                            radial-gradient(circle 500px at 100% 0%, rgba(217,161,0,0.1), transparent)
                        `,
                        backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
                        width: '100%'
                    }}
                />

                <main className="hero" style={{ position: 'relative', zIndex: 2 }}>
                    <section className="hero-content">

                        <span className="hero-tag">Trusted by 2,000+ clients worldwide</span>

                        <h1 className="hero-heading">
                            Your Financial Future<br />Starts Here
                        </h1>

                        <p className="hero-subtext">
                            Expert <strong>financial guidance</strong> to help you achieve your goals. From
                            <strong> wealth management</strong> to <strong>retirement planning</strong>, we're here to
                            secure your future.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/get-started" className="hero-btn primary" title="Contact us to get started">
                                Get Started &rarr;
                            </Link>
                            <Link to="/services" className="hero-btn secondary" title="View our financial services">
                                Our Services
                            </Link>
                        </div>

                        {/* Semantic stats for accessibility and bots */}
                        <div className="hero-stats">
                            <article className="stat">
                                <span className="stat-value">Rs 15Cr+</span>
                                <h2 className="stat-label">Assets Managed</h2>
                            </article>
                            <article className="stat">
                                <span className="stat-value">30+</span>
                                <h2 className="stat-label">Years Experience</h2>
                            </article>
                            <article className="stat">
                                <span className="stat-value">98%</span>
                                <h2 className="stat-label">Client Satisfaction</h2>
                            </article>
                        </div>

                    </section>

                    <aside className="hero-image-container">
                        <img 
                            src={heroBuildingImage} 
                            alt="GEEOM Securities Headquarters - Modern financial office building" 
                            className="hero-image" 
                            loading="eager" 
                        />
                    </aside>
                </main>
            </div>
        </>
    );
}

export default Hero;