// src/components/GeeomPhilosophy.jsx

import React, { useState } from 'react';
import '../../CSS/GeeomPhilosophy.css';

const philosophyData = [
  {
    letter: 'G',
    word: 'Growth',
    title: 'Growth',
    description: 'Strategies focused on consistent, long-term capital appreciation and sustainable financial expansion.',
    icon: '📈' 
  },
  {
    letter: 'E',
    word: 'Expertise',
    title: 'Expertise',
    description: 'Leveraging decades of market knowledge to provide professional insights and data-driven advice.',
    icon: '🎓'
  },
  {
    letter: 'E',
    word: 'Earnings',
    title: 'Earnings',
    description: 'Maximizing returns through optimized portfolio allocation and smart investment choices.',
    icon: '💰'
  },
  {
    letter: 'O',
    word: 'Opportunity',
    title: 'Opportunity',
    description: 'Identifying and seizing unique market opportunities before they become mainstream trends.',
    icon: '🚀'
  },
  {
    letter: 'M',
    word: 'Management',
    title: 'Management',
    description: 'Dedicated wealth management and personalized service to secure your financial legacy.',
    icon: '👥'
  }
];

const GeeomPhilosophy = () => {
  // State is null by default (nothing shown)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Helper to get data safely
  const activeItem = hoveredIndex !== null ? philosophyData[hoveredIndex] : null;

  return (
    <section className="philosophy-section">
      <div className="philosophy-header">
        <h2 className="philosophy-title">Our GEEOM Philosophy</h2>
        <p className="philosophy-subtitle">The foundation of our financial approach</p>
      </div>

      <div className="philosophy-interactive-area">
        
        {/* Letter Boxes */}
        <div className="letters-container">
          {philosophyData.map((item, index) => (
            <div
              key={index}
              className={`letter-box ${hoveredIndex === index ? 'active' : ''}`}
              // --- CHANGE: Use Hover Events ---
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.letter}
            </div>
          ))}
        </div>

        {/* Floating Definition Card */}
        {/* We keep the wrapper always to reserve space (optional), 
            or we can let it collapse. Here I use a class to toggle visibility. */}
        <div className={`definition-card-wrapper ${hoveredIndex !== null ? 'visible' : ''}`}>
          {activeItem && (
            <div className="definition-card">
              {/* Dynamic Arrow Position */}
              <div 
                className="card-arrow" 
                style={{ left: `calc((100% / 5) * ${hoveredIndex} + (100% / 5) / 2)` }}
              ></div>

              <div className="card-content">
                {/* for future icon if needed */}
                {/* <span className="card-icon-large">{activeItem.icon}</span> */}
                <div className="card-text">
                  <h4 className="card-title">{activeItem.title}</h4>
                  <p className="card-desc">{activeItem.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Legend */}
        <div className="philosophy-legend">
          <span className="legend-highlight">GEEOM</span> = 
          {philosophyData.map((item, index) => (
            <span key={index} className={hoveredIndex === index ? 'legend-active' : ''}>
               {' '}{item.word}{index < philosophyData.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GeeomPhilosophy;