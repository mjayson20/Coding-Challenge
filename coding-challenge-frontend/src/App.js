import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CalendarPage from './pages/CalendarPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <NavLink to="/" className="navbar-brand">
            CodeChallenge Hub
          </NavLink>
          <div className="navbar-right">
            <div className="streak-counter">
              <span>🔥</span>
              <span>7 Day Streak</span>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;