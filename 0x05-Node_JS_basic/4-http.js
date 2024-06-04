const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

const port = 1245;

app.listen(port, '127.0.0.1', () => {
});

module.exports = app;
