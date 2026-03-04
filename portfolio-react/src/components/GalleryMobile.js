import React, { useState } from 'react';
import './Gallery.css';

function GalleryMobile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    { id: 1, src: '/mobile/login.jpg', caption: 'Login Screen - User Authentication' },
    { id: 2, src: '/mobile/category.jpg', caption: 'Category Selection' },
    { id: 3, src: '/mobile/marketplace.jpg', caption: 'Marketplace - Product Listings' },
    { id: 4, src: '/mobile/playstore.jpg', caption: 'Google Play Store - App Listing' },
    { id: 5, src: '/mobile/appstore.jpg', caption: 'Apple App Store - App Listing' }
  ];

  return (
    <div className="gallery-project">
      <div className="gallery-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="gallery-header-content">
          <h3 className="gallery-title">Mobile Development Android And IOS (Insurely Mobile Application)</h3>
          <p className="gallery-subtitle">Cross-Platform Insurance Mobile Application</p>
          <div className="tech-tags">
            <span className="tech-tag">C# .NET</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">Python API</span>
            <span className="tech-tag">MSSQL</span>
            <span className="tech-tag">Qt Framework</span>
            <span className="tech-tag">QML</span>
            <span className="tech-tag">C++</span>
            <span className="tech-tag">Java</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '10px' }}>
            Managing Google Play Store and Apple App Store Application Version Updates
          </p>
        </div>
        <button className="expand-button">
          {isExpanded ? '▼ Hide Gallery' : '▶ View Gallery'}
        </button>
      </div>

      {isExpanded && (
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}>
              <div className="gallery-image">
                <img 
                  src={process.env.PUBLIC_URL + item.src} 
                  alt={item.caption}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span>Image ${item.id}</span>`;
                  }}
                />
              </div>
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              Close
            </button>
            <img 
              src={process.env.PUBLIC_URL + selectedImage.src} 
              alt={selectedImage.caption}
              className="modal-image"
            />
            <p style={{ color: '#94a3b8', textAlign: 'center', marginTop: '15px' }}>
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryMobile;
