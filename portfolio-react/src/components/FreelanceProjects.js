import React from 'react';
import './FreelanceProjects.css';

function FreelanceProjects({ projects }) {
  return (
    <section className="section freelance-projects">
      <h2 className="section-title">Freelance Projects</h2>
      
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">{project}</li>
        ))}
      </ul>

    </section>
  );
}

export default FreelanceProjects;
