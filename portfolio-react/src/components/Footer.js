import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-tech">
          <p className="footer-title">Built With</p>
          <div className="tech-stack">
            <span className="tech-item">React</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">CSS3</span>
            <span className="tech-item">HTML5</span>
          </div>
        </div>
        
        <p className="copyright">© {currentYear} Leonard Lalican. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
