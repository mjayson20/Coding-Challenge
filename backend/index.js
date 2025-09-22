const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Dummy data
const subjects = [
  {
    id: 1,
    name: 'Internet & Web Programming',
    bestTopic: 'HTTP Protocols',
    worstTopic: 'CSS Flexbox'
  },
  {
    id: 2,
    name: 'Algorithm Design & Analysis',
    bestTopic: 'Dynamic Programming',
    worstTopic: 'Graph Theory'
  }
];

// Routes
app.get('/', (req, res) => {
  res.send('CodeChallenge backend is running');
});

app.get('/api/subjects', (req, res) => {
  res.json(subjects);
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});