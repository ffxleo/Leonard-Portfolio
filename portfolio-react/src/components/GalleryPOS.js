import React, { useState } from 'react';
import './Gallery.css';

function GalleryPOS() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    { id: 1, src: '/pos/login.png', caption: 'Login Page - User Authentication' },
    { id: 2, src: '/pos/transaction.png', caption: 'Point of Sale - Transaction Processing' },
    { id: 3, src: '/pos/inventory.png', caption: 'Inventory Management' },
    { id: 4, src: '/pos/purchase.png', caption: 'Purchase Order Management' },
    { id: 5, src: '/pos/login-resto.png', caption: 'Restaurant POS - Login' },
    { id: 6, src: '/pos/dashboard-resto.png', caption: 'Restaurant POS - Dashboard' },
    { id: 7, src: '/pos/pos-resto.png', caption: 'Restaurant POS - Order Management' },
    { id: 8, src: '/pos/deploy1.jpg', caption: 'System Deployment - Setup' },
    { id: 9, src: '/pos/deploy2.jpg', caption: 'System Deployment - Configuration' },
    { id: 10, src: '/pos/deploy3.jpg', caption: 'System Deployment - Testing' },
    { id: 11, src: '/pos/deploy4.jpg', caption: 'System Deployment - Live' }
  ];

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

  return (
    <div className="gallery-project">
      <div className="gallery-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="gallery-header-content">
          <h3 className="gallery-title">POS and Inventory System</h3>
          <p className="gallery-subtitle">Point of Sale & Stock Management Solution</p>
          <div className="tech-tags">
            <span className="tech-tag">C#</span>
            <span className="tech-tag">VB.NET</span>
            <span className="tech-tag">WinForms</span>
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <button className="modal-nav modal-prev" onClick={prevImage}>
              ‹
            </button>
            <button className="modal-nav modal-next" onClick={nextImage}>
              ›
            </button>
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

export default GalleryPOS;
