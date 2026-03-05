import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

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
          {galleryImages.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openModal(item, index)}>
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
          <button className="modal-close" onClick={() => setSelectedImage(null)}>
            ✕
          </button>
          <button className="modal-nav modal-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ‹
          </button>
          <button className="modal-nav modal-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ›
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={process.env.PUBLIC_URL + selectedImage.src} 
              alt={selectedImage.caption}
              className="modal-image"
            />
            <p className="modal-caption">
              {selectedImage.caption}
            </p>
            <p className="modal-counter">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
