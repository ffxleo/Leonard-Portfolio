import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import FreelanceProjects from './components/FreelanceProjects';
import Gallery from './components/Gallery';
import GalleryPOS from './components/GalleryPOS';
import GalleryMobile from './components/GalleryMobile';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      
      <section id="home">
        <Header person={portfolioData.person} />
      </section>
      
      <div className="container">
        
        {/* about section with work experience, education and skills */}
        <section id="about">
          <WorkExperience workHistory={portfolioData.workHistory} />
          <Education education={portfolioData.education} />
          <Skills skills={portfolioData.skills} />
        </section>
        
        {/* projects I've worked on */}
        <section id="projects">
          <FreelanceProjects projects={portfolioData.freelanceProjects} />
        </section>

        {/* gallery section */}
        <section id="gallery">
          <div className="section">
            <h2 className="section-title">Project Gallery</h2>
            <Gallery />
            <GalleryPOS />
            <GalleryMobile />
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}

export default App;
