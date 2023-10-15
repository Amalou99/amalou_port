import React from 'react';
import './skills.css';
import SkillsChart from './SkillsChart';

const Skills = () => {
    return (
      <div className="skills-page">
        <div className="skills-content">
          <h2>My Skills</h2>
          <SkillsChart />
        </div>
      </div>
    );
  };
  
  export default Skills;