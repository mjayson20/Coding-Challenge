import React from 'react';
import './HomePage.css';

const subjectData = [
  {
    name: 'Internet & Web Programming',
    most: 'HTML & CSS',
    least: 'AJAX',
  },
  {
    name: 'Design & Analysis of Algorithms',
    most: 'Greedy Algorithms',
    least: 'Backtracking',
  },
  {
    name: 'Cryptography & Network Security',
    most: 'RSA',
    least: 'Elliptic Curve',
  },
  {
    name: 'Software Engineering & Project Management',
    most: 'Agile Methodology',
    least: 'Risk Management',
  },
  {
    name: 'Basic Coding in C',
    most: 'Loops',
    least: 'Pointers',
  },
  {
    name: 'Aptitude',
    most: 'Percentages',
    least: 'Permutations & Combinations',
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="section-title">Subject Performance Review</h1>
      <p className="intro-text">
        Below is a quick snapshot of how you've been performing across different subjects and
        topics. Identify strengths and areas for improvement at a glance!
      </p>

      <div className="subjects-grid">
        {subjectData.map((subject) => (
          <div key={subject.name} className="subject-card">
            <h2 className="subject-title">{subject.name}</h2>
            <div className="topic-info most">
              <span className="label">Best Topic</span>
              <span className="value">{subject.most}</span>
            </div>
            <div className="topic-info least">
              <span className="label">Needs Improvement</span>
              <span className="value">{subject.least}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;