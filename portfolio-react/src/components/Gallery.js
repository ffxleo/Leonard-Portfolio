import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    { id: 1, caption: 'Login Page - Secure Authentication' },
    { id: 2, caption: 'Dashboard - Budget vs Actual Cost Analysis' },
    { id: 3, caption: 'Inventory Management - Product List View' },
    { id: 4, caption: 'Product Details - Comprehensive Item Information' },
    { id: 5, caption: 'Add New Item - Inventory Registration Form' }
  ];

  return (
    <div className="gallery-project">
      <div className="gallery-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="gallery-header-content">
          <h3 className="gallery-title">Spare Parts Management System</h3>
          <p className="gallery-subtitle">Inventory & Budget Tracking Solution</p>
          <div className="tech-tags">
            <span className="tech-tag">ASP.NET MVC</span>
            <span className="tech-tag">LINQ</span>
            <span className="tech-tag">Razor Pages</span>
            <span className="tech-tag">JavaScript</span>
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
                Image {item.id}
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
            <div className="modal-image">
              <p style={{ color: '#94a3b8', textAlign: 'center' }}>
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
