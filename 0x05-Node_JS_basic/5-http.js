const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write('');
        res.end(`This is the list of our students\n${data.join('\n')}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

const port = 1245;

app.listen(port, '127.0.0.1', () => {
});

module.exports = app;
