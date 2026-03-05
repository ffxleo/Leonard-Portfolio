import React, { useState } from 'react';
import './Gallery.css';

function GalleryTimekeeping() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    { id: 1, src: '/timekeeping/timekeeping.png', caption: 'Timekeeping System - Main Interface' },
    { id: 2, src: '/timekeeping/timekeeping-in.png', caption: 'Time In - NFC Card Scan' },
    { id: 3, src: '/timekeeping/timekeeping-out.png', caption: 'Time Out - NFC Card Scan' },
    { id: 4, src: '/timekeeping/timekeeping-invalid.png', caption: 'Invalid Card - Error Handling' },
    { id: 5, src: '/timekeeping/system-testing-deployment-live.jpg', caption: 'System Testing & Deployment' }
  ];

  return (
    <div className="gallery-project">
      <div className="gallery-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="gallery-header-content">
          <h3 className="gallery-title">Timekeeping NFC Reader</h3>
          <p className="gallery-subtitle">NFC ID-Based Employee Time Tracking System</p>
          <div className="tech-tags">
            <span className="tech-tag">WPF</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">XAML</span>
            <span className="tech-tag">Assembly</span>
            <span className="tech-tag">HEX</span>
            <span className="tech-tag">MySQL</span>
          </div>
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

export default GalleryTimekeeping;
