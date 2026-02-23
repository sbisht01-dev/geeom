import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Adjust path based on your folder structure
import { ref, onValue } from "firebase/database";
import '../../CSS/Resources.css';
// import { Helmet } from 'react-helmet'; // For dynamic SEO meta tags
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
                const allDocs = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                const activeDocs = allDocs.filter(doc => doc.isVisible);
                setDocuments(activeDocs.reverse());
            } else {
                setDocuments([]);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
   <main className="resources-page">
            
    {/* --- Resource Hero Section --- */}
    <section className="resource-hero-section">
      <div className="resource-hero-container">
        
        {/* 'role="doc-subtitle"' tells bots this span provides context to the H1 */}
        <span className="resource-badge" role="doc-subtitle">Client Downloads</span>
        
        {/* Standard H1 is the most important SEO signal on the page */}
        <h1 className="resource-title">
          Essential Financial <br className="mobile-break" aria-hidden="true" /> Resources
        </h1>
        
        <p className="resource-desc">
          Access key documents, market reports, and regulatory forms securely 
          to stay informed and manage your portfolio effectively.
        </p>

      </div>
    </section>

    {/* --- Document Grid --- */}
    <section className="res-container" aria-label="Financial Documents Directory">
        {loading ? (
            <div className="res-grid" aria-busy="true" aria-live="polite">
                {[1, 2, 3].map(i => <div key={i} className="res-card skeleton"></div>)}
            </div>
        ) : documents.length === 0 ? (
            <div className="empty-state">
                <p>No documents available at the moment.</p>
            </div>
        ) : (
            <div className="res-grid">
                {documents.map((doc) => (
                    /* SEO: itemScope & itemType define this card as a 'DigitalDocument'.
                       This helps Google create "Rich Snippets" in search results.
                    */
                    <article 
                        key={doc.id} 
                        className="res-card" 
                        itemScope 
                        itemType="https://schema.org/DigitalDocument"
                    >
                        <div className="res-icon-wrapper" aria-hidden="true">
                            <FileIcon />
                        </div>

                        <div className="res-info">
                            {/* itemProp="name" identifies the document title for search engines */}
                            <h2 className="res-card-title" itemProp="name" title={doc.name}>
                                {doc.name}
                            </h2>

                            <div className="res-meta">
                                {/* itemProp="fileFormat" helps bots know what kind of file it is */}
                                <span className="res-size" itemProp="fileFormat">
                                    {doc.size || 'PDF'}
                                </span>

                                {/* dateTime attribute makes the date machine-readable */}
                                <time 
                                    className="res-date" 
                                    dateTime={doc.uploadedAt} 
                                    itemProp="datePublished"
                                >
                                    {doc.uploadedAt ? doc.uploadedAt.split(',')[0] : ''}
                                </time>
                            </div>
                        </div>

                        {/* SEO: 'download' attribute signals a file resource.
                           'itemProp="url"' links the download action to the DigitalDocument schema.
                        */}
                        <a 
                            href={doc.url} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            className="download-btn"
                            aria-label={`Download ${doc.name}`}
                            itemProp="url"
                            download
                        >
                            Download Now
                        </a>
                    </article>
                ))}
            </div>
        )}
    </section>
  </main>
    );
};

export default Resources;