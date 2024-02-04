const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');
const WebSocket = require('ws');

const app = express();
const port = 9669;
const host = '0.0.0.0';

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type',
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, :3!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(port, host, () => {
  const serverAddress = server.address();
  const ip = serverAddress.address === '0.0.0.0' ? getLocalIP() : serverAddress.address;
  console.log(`1/ip | Server listening at http://${ip}:${port}`);
  console.log(`2/local | Server is also accessible via http://localhost:${port}`);
  console.log(`1/ip | This is the url for all other pcs on the network to use and connect to use.`);
  console.log(`2/local | This is the url that only that your pc that can go to and is mainly used for a API and faster connection speeds.`);
});

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  const originalLog = console.log;
  console.log = function (message) {
    originalLog.apply(console, arguments);
    ws.send(JSON.stringify({ type: 'log', message }));
  };

  ws.on('message', (message) => {
  });

  ws.on('close', () => {
    console.log = originalLog;
  });
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

function getLocalIP() {
  const networkInterfaces = os.networkInterfaces();
  for (const key in networkInterfaces) {
    const networkInterface = networkInterfaces[key];
    for (const entry of networkInterface) {
      if (!entry.internal && entry.family === 'IPv4') {
        return entry.address;
      }
    }
  }
  return '127.0.0.1';
}