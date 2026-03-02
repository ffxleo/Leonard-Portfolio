import React from 'react';
import './WorkExperience.css';

function WorkExperience({ workHistory }) {
  return (
    <section className="section work-experience">
      <h2 className="section-title">Work Experience</h2>
      
      {workHistory.map((job, index) => (
        <article key={index} className="job">
          
          <div className="job-header">
            <h3 className="company">{job.company}</h3>
            <span className="date-range">{job.dateRange}</span>
          </div>
          
          <p className="position">{job.position}</p>
          <p className="location">{job.location}</p>
          
          {/* what I did at this job */}
          <ul className="responsibilities">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>

        </article>
      ))}
    </section>
  );
}

export default WorkExperience;
