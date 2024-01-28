// index.js
const express = require('express');
const fs = require('fs');
const ini = require('ini');
const path = require('path');

const app = express();
const port = 80;

// Read the configuration file
const configFile = 'path.ini';
let config;

try {
  const configData = fs.readFileSync(configFile, 'utf-8');
  config = ini.parse(configData);
} catch (err) {
  console.error('Error reading configuration file:', err.message);
  process.exit(1);
}

// Define the path where all HTML, CSS, and JS files are located
const websitePath = config.websitePath || 'path/to/your/website/files';

// Serve static files
app.use(express.static(path.resolve(websitePath)));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
