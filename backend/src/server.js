require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Ethiopian Navigator API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/services', (req, res) => {
  res.json({
    message: 'Services endpoint will be implemented soon',
    services: []
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Ethiopian Navigator API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
