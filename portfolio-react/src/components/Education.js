import React from 'react';
import './Education.css';

function Education({ education }) {
  return (
    <section className="section education">
      <h2 className="section-title">Education</h2>
      
      {education.map((edu, index) => (
        <article key={index} className="education-item">
          
          <div className="edu-header">
            <h3 className="institution">{edu.institution}</h3>
            <span className="date-range">{edu.dateRange}</span>
          </div>
          
          <p className="course">{edu.course}</p>
          <p className="level">{edu.level}</p>
        </article>
      ))}

    </section>
  );
}

export default Education;
