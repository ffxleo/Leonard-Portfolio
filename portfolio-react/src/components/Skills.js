import React from 'react';
import './Skills.css';

function Skills({ skills }) {
  return (
    <section className="section skills">
      <h2 className="section-title">Tech Stack & Tools 🛠️</h2>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Technologies I use to bring ideas to life
      </p>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
