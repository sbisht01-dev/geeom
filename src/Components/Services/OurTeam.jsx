// src/components/about/OurTeam.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import '../../CSS/OurTeam.css';

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Reference the 'team_members' node
    const teamRef = ref(db, 'team_members');

    // 2. Listen for real-time updates
    const unsubscribe = onValue(teamRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert object (member_01, member_02) to array
        const teamArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setTeamData(teamArray);
      } else {
        setTeamData([]);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching team data:", error);
      setLoading(false);
    });

    // 3. Cleanup listener
    return () => unsubscribe();
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">

        <div className="section-header">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">Meet the experienced professionals guiding GEEOM</p>
        </div>

        <div className="team-grid">

          {/* Loading State: Skeleton Cards */}
          {loading && (
            [...Array(4)].map((_, i) => (
              <div key={i} className="team-card skeleton-card">
                <div className="skeleton-avatar"></div>
                <div className="skeleton-line title"></div>
                <div className="skeleton-line subtitle"></div>
                <div className="skeleton-line text"></div>
              </div>
            ))
          )}

          {/* Data Loaded: Actual Cards */}
          {!loading && teamData.map((member) => (
            <div key={member.id} className="team-card">

              <div className="avatar-wrapper">
                {/* If URL exists, try to show image */}
                {member.image_url ? (
                  <img
                    loading='lazy'
                    src={member.image_url}
                    alt={member.name}
                    className="member-avatar-img"
                    // Fallback to icon if image fails to load
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  />
                ) : null}

                {/* Fallback Icon (Shows if no URL or load error) */}
                <div className="avatar-placeholder" style={{ display: member.image_url ? 'none' : 'flex' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <span className="member-creds">{member.creds}</span>

              <div className="divider-line"></div>

              <p className="member-bio">{member.bio}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeam;