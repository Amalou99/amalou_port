import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const SkillsChart = () => {
  const data = {
    labels: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Database', 'DevOps', 'UI/UX', 'Problem Solving'],
    datasets: [
      {
        data: [90, 85, 80, 90, 80, 75, 85, 95], // Skill proficiency percentages
        backgroundColor: [
          '#FF6B6B',
          '#FFD166',
          '#06D6A0',
          '#277DA1',
          '#F4A261',
          '#A06177',
          '#A7E0B5',
          '#E63946',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
    },
  };

  return (
    <div className="skills-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SkillsChart;