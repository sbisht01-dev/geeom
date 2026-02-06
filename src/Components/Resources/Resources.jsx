import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Adjust path based on your folder structure
import { ref, onValue } from "firebase/database";
import '../../CSS/Resources.css';

// Simple File Icon (SVG)
const FileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const Resources = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docsRef = ref(db, 'site_documents');
        
        const unsubscribe = onValue(docsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert object to array
                const allDocs = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                
                // FILTER: Only show files where isVisible === true
                const activeDocs = allDocs.filter(doc => doc.isVisible);
                
                // Sort by newest first
                setDocuments(activeDocs.reverse());
            } else {
                setDocuments([]);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="resources-page">
            
            {/* --- Minimal Hero Section --- */}
            <header className="resources-hero">
                <div className="res-hero-content">
                    <span className="res-tag">Client Downloads</span>
                    <h1>Essential Financial Resources</h1>
                    <p>Access key documents, market reports, and regulatory forms securely.</p>
                </div>
            </header>

            {/* --- Document Grid --- */}
            <section className="res-container">
                {loading ? (
                    // Skeleton Loader
                    <div className="res-grid">
                        {[1,2,3].map(i => <div key={i} className="res-card skeleton"></div>)}
                    </div>
                ) : documents.length === 0 ? (
                    // Empty State
                    <div className="empty-state">
                        <p>No documents available at the moment.</p>
                    </div>
                ) : (
                    // Actual Files
                    <div className="res-grid">
                        {documents.map((doc) => (
                            <div key={doc.id} className="res-card">
                                <div className="res-icon-wrapper">
                                    <FileIcon />
                                </div>
                                <div className="res-info">
                                    <h3 title={doc.name}>{doc.name}</h3>
                                    <div className="res-meta">
                                        <span className="res-size">{doc.size || 'PDF'}</span>
                                        <span className="res-date">{doc.uploadedAt ? doc.uploadedAt.split(',')[0] : ''}</span>
                                    </div>
                                </div>
                                <a 
                                    href={doc.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="download-btn"
                                >
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Resources;