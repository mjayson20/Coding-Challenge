import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';
import './AnalyticsPage.css';

// Dummy data for charts
const solvedData = [
  { week: 'Week 1', solved: 5 },
  { week: 'Week 2', solved: 8 },
  { week: 'Week 3', solved: 6 },
  { week: 'Week 4', solved: 10 },
];

const timeData = [
  { difficulty: 'Easy', avgTime: 10 },
  { difficulty: 'Medium', avgTime: 25 },
  { difficulty: 'Hard', avgTime: 45 },
];

const difficultyData = [
  { name: 'Easy', value: 60 },
  { name: 'Medium', value: 30 },
  { name: 'Hard', value: 10 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];
// Accuracy data for Radar chart
const accuracyData = [
  { week: 'Week 1', accuracy: 80 },
  { week: 'Week 2', accuracy: 75 },
  { week: 'Week 3', accuracy: 90 },
  { week: 'Week 4', accuracy: 85 },
];

const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <h1 className="section-title">Your Performance Analytics</h1>
      <p className="description">
        Visual insights into your coding challenge progress and performance.
      </p>

      <div className="charts-grid">
        {/* Problems Solved Over Time */}
        <div className="chart-card">
          <h2>Problems Solved Per Week</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={solvedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="solved" stroke="#007bff" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Average Time Taken */}
        <div className="chart-card">
          <h2>Average Time Taken (mins)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="difficulty" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgTime" fill="#28a745" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Difficulty Breakdown */}
        <div className="chart-card">
          <h2>Problem Difficulty Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={difficultyData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {difficultyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Accuracy Rate per Week */}
        <div className="chart-card">
          <h2>Accuracy Rate per Week (%)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={accuracyData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="week" />
              <Tooltip />
              <Radar dataKey="accuracy" stroke="#ff4d4f" fill="#ff4d4f" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;