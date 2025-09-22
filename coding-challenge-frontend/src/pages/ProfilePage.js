import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './ProfilePage.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ProfilePage = () => {
  // Dummy student data
  const student = {
    name: "John Doe",
    registrationNumber: "2360416",
    department: "Computer Science and Engineering",
    class: "B.Tech 3rd Year",
    currentStreak: 15, // Days of consecutive participation
    totalChallengesSolved: 120,
    preferredLanguage: "Python",
    bio: "Passionate about problem-solving and competitive programming. Always learning!",
    profilePicture: "/logo192.png",// Local placeholder image to avoid external link issues
    // New dummy data for charts
    challengeHistory: [
      { month: "Jan", solved: 10 },
      { month: "Feb", solved: 15 },
      { month: "Mar", solved: 20 },
      { month: "Apr", solved: 12 },
      { month: "May", solved: 25 },
      { month: "Jun", solved: 18 },
    ],
    difficultyDistribution: {
      easy: 50,
      medium: 40,
      hard: 30,
    },
    languageProficiency: {
      Python: 60,
      Java: 30,
      'C++': 20,
      JavaScript: 10,
    }
  };

  // Chart Data
  const solvedChallengesData = {
    labels: student.challengeHistory.map(item => item.month),
    datasets: [
      {
        label: 'Challenges Solved',
        data: student.challengeHistory.map(item => item.solved),
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: '#007bff',
        tension: 0.3,
      },
    ],
  };

  const difficultyData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Problems Solved by Difficulty',
        data: [
          student.difficultyDistribution.easy,
          student.difficultyDistribution.medium,
          student.difficultyDistribution.hard,
        ],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
        hoverOffset: 4,
      },
    ],
  };

  const languageData = {
    labels: Object.keys(student.languageProficiency),
    datasets: [
      {
        label: 'Problems Solved by Language',
        data: Object.values(student.languageProficiency),
        backgroundColor: [
          '#4CAF50', '#FFC107', '#007bff', '#6C757D', '#17A2B8', '#6610F2'
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--text-dark)',
        }
      },
      title: {
        display: true,
        font: {
          size: 16,
        },
        color: 'var(--primary-blue)',
      },
      tooltip: {
        bodyColor: 'var(--text-dark)',
        titleColor: 'var(--primary-blue)',
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'var(--text-dark)',
        },
        grid: {
          color: 'var(--border-color-light)',
        }
      },
      y: {
        ticks: {
          color: 'var(--text-dark)',
        },
        grid: {
          color: 'var(--border-color-light)',
        }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'var(--text-dark)',
        }
      },
      title: {
        display: true,
        font: {
          size: 16,
        },
        color: 'var(--primary-blue)',
      }
    }
  };

  return (
    <div className="profile-page">
      <h1 className="section-title">Student Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <img src={student.profilePicture} alt="Profile" className="profile-pic" />
          <h2>{student.name}</h2>
          <p className="reg-number">{student.registrationNumber}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <strong>Department:</strong> <span>{student.department}</span>
          </div>
          <div className="detail-item">
            <strong>Class:</strong> <span>{student.class}</span>
          </div>
          <div className="detail-item">
            <strong>Current Streak:</strong> <span className="streak">{student.currentStreak} Days 🔥</span>
          </div>
          <div className="detail-item">
            <strong>Total Solved:</strong> <span>{student.totalChallengesSolved} Problems</span>
          </div>
          <div className="detail-item">
            <strong>Preferred Language:</strong> <span>{student.preferredLanguage}</span>
          </div>
          <div className="detail-item bio-section">
            <strong>Bio:</strong> <p>{student.bio}</p>
          </div>
        </div>
        <button className="btn edit-profile-btn">Edit Profile</button>
      </div>

      <div className="charts-section">
        <h2 className="section-title">Performance Overview</h2>

        <div className="chart-card">
          <h3 className="chart-title">Challenges Solved Over Time</h3>
          <Line data={solvedChallengesData} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Monthly Challenges Solved'}}}} />
        </div>

        <div className="chart-grid">
          <div className="chart-card">
            <h3 className="chart-title">Difficulty Distribution</h3>
            <Doughnut data={difficultyData} options={{...doughnutOptions, plugins: {...doughnutOptions.plugins, title: {...doughnutOptions.plugins.title, text: 'Problems by Difficulty'}}}} />
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Language Proficiency</h3>
            <Bar data={languageData} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Problems Solved by Language'}}}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;