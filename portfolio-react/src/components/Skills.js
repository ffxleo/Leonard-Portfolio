import React from 'react';
import './Skills.css';

function Skills({ skills }) {
  return (
    <section className="section skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
