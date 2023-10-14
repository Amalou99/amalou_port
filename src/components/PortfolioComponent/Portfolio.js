import React from 'react';
import './portfolio.css'; // Import your CSS file

function Portfolio() {
  const workExperience = [
    {
      jobTitle: 'Software Engineer',
      company: 'kShuttle',
      location: 'Paris, Fr',
      date: 'August 2022 - Present',
      description: 'Developed web applications and implemented new features, collaborating with cross-functional teams.',
    },
    {
      jobTitle: 'Front-End Developer',
      company: 'WebDesign Pro',
      location: 'New York, NY',
      date: 'May 2016 - May 2018',
      description: 'Designed and built responsive websites, ensuring optimal user experiences across devices.',
    },
    // Add more work experience entries as needed
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      location: 'Your City, State',
      date: 'August 2012 - May 2016',
    },
    {
      degree: 'Master of Computer Engineering',
      school: 'Tech Institute',
      location: 'Another City, State',
      date: 'August 2016 - May 2018',
    },
    // Add more education entries as needed
  ];

  return (
    <div className="portfolio">
      <section className="work-experience">
        <h2>Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.jobTitle}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.date}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Education</h2>
        {education.map((study, index) => (
          <div key={index} className="school">
            <h3>{study.degree}</h3>
            <p>{study.school}</p>
            <p>{study.location}</p>
            <p>{study.date}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;