import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    { id: 1, src: '/Spareparts/login.png', caption: 'Login Page - Secure Authentication' },
    { id: 2, src: '/Spareparts/dashboard.png', caption: 'Dashboard - Budget vs Actual Cost Analysis' },
    { id: 3, src: '/Spareparts/inventory.png', caption: 'Inventory Management - Product List View' },
    { id: 4, src: '/Spareparts/details.png', caption: 'Product Details - Comprehensive Item Information' },
    { id: 5, src: '/Spareparts/additem.png', caption: 'Add New Item - Inventory Registration Form' },
    { id: 6, src: '/Spareparts/purchase.png', caption: 'Purchase Order Management' },
    { id: 7, src: '/Spareparts/deployment.jpg', caption: 'System Deployment - Live Environment' }
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

export default Gallery;
