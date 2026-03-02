import React from 'react';
import './Header.css';

function Header({ person }) {
  
  const handleContactClick = () => {
    // show contact info popup
    alert(`Contact Number: ${person.phone}\nEmail: ${person.email}`);
  };

  return (
    <header className="header">
      <div className="header-content">
        
        <div className="hero-left">
          <h1 className="greeting">Hello, I'm</h1>
          <h2 className="name">{person.name}</h2>
          
          <p className="tagline">
            I'm a <span className="highlight">Software Engineer</span> and <span className="highlight">.NET Developer</span> based in Laguna, Philippines. 
            I strive to build immersive and beautiful applications through carefully crafted code and user-centric design.
          </p>
          
          <button className="cta-button" onClick={handleContactClick}>
            Say Hello!
          </button>
        </div>
        
        <div className="hero-right">
          <div className="profile-image-container">
            <img 
              src="/profile.jpg" 
              alt={`${person.name} - Software Engineer`} 
              className="profile-image" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
