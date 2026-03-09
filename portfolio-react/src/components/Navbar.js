import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // smooth scroll to different sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          Leonard
        </div>
        
        {/* hamburger menu for mobile */}
        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Introduction</a></li>
          <li><a onClick={() => scrollToSection('about')}>Work Experience</a></li>
          <li><a onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Freelance Project</a></li>
          <li><a onClick={() => scrollToSection('gallery')}>Project Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
