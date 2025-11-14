// src/components/TrackRecord.jsx

import React from 'react';
import '../../CSS/TrackRecord.css'; // Import the dedicated CSS file

// --- 1. Import your new SVG icons ---
import AssetsIcon from '../../assets/icons/assets-icon.svg?react';
import ClientsIcon from '../../assets/icons/clients-icon.svg?react';
import YearsIcon from '../../assets/icons/years-icon.svg?react';
import RetentionIcon from '../../assets/icons/retention-icon.svg?react';

// --- 2. Update the data array ---
const statsData = [
  {
    icon: AssetsIcon,
    value: '$2.5B+',
    label: 'Assets Under Management',
    description: 'Trusted with billions in client assets'
  },
  {
    icon: ClientsIcon,
    value: '10,000+',
    label: 'Satisfied Clients',
    description: 'Helping individuals and families'
  },
  {
    icon: YearsIcon,
    value: '25+',
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

const TrackRecord = () => {
  return (
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
  );
};

export default TrackRecord;