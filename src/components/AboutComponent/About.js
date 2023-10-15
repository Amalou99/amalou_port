import React from 'react';
import './about.css'; // Import your CSS file
import fullImage from './background2.avif'; // Import your full-width image
import Portfolio from '../PortfolioComponent/Portfolio'
function About() {
  return (
    <div>
      <div className="about-page">
      <div className="about-content">
        <div className="bio">
          <h2>About Me</h2>
          <p>
          Passionate software engineer with a strong background in programming languages like Java. 
          interested in DevOps technologies like Docker, Jenkins and Kafka. Committed to delivering high-quality, 
          efficient, and innovative solutions. Constantly seeking opportunities to learn and apply new technologies. 
          Let's connect and collaborate on exciting projects!
          </p>
          <button>Get my resume</button>
        </div>
        <div className="full-image">
          <img src={fullImage} alt="Your Full-Width Image" />
        </div>
      </div>
      
    </div>
    <Portfolio />
    </div>
    
  );
}

export default About;