import React, { useState } from 'react';
import './CalendarPage.css';

// Helper to generate dummy participation data for demo purposes
const generateParticipationData = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const data = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const level = Math.floor(Math.random() * 4); // 0 (none) – 3 (high)
    data.push({ date: new Date(year, month, i), level });
  }
  return data;
};

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarPage = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const participationData = generateParticipationData(currentYear, currentMonth);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun

  // Build cells including leading blanks to align first day of the month
  const calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(null);
  }
  for (let i = 0; i < daysInMonth; i++) {
    calendarCells.push(participationData[i]);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  return (
    <div className="calendar-page">
      <h1 className="section-title">Challenge Participation Calendar</h1>

      <div className="calendar-header">
        <button className="nav-btn" onClick={handlePrevMonth} aria-label="Previous Month">
          &lt;
        </button>
        <h2>
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h2>
        <button className="nav-btn" onClick={handleNextMonth} aria-label="Next Month">
          &gt;
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="weekday-labels">
        {WEEKDAY_NAMES.map((day) => (
          <div key={day} className="weekday-label">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {calendarCells.map((cell, index) => {
          if (!cell) {
            return <div key={index} className="calendar-day empty" />;
          }

          const day = cell.date.getDate();
          const isToday =
            cell.date.getFullYear() === today.getFullYear() &&
            cell.date.getMonth() === today.getMonth() &&
            cell.date.getDate() === today.getDate();

          return (
            <div
              key={index}
              className={`calendar-day level-${cell.level} ${isToday ? 'today' : ''}`}
              title={`Problems solved: ${cell.level}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <span className="legend-item">
          <span className="legend-color level-3" /> High Activity
        </span>
        <span className="legend-item">
          <span className="legend-color level-2" /> Moderate
        </span>
        <span className="legend-item">
          <span className="legend-color level-1" /> Low
        </span>
        <span className="legend-item">
          <span className="legend-color level-0" /> None
        </span>
      </div>
    </div>
  );
};

export default CalendarPage;