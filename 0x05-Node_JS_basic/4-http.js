const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

const port = 1245;

server.listen(port, () => {
  console.log('...');
});
