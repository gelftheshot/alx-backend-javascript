const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let response = 'This is the list of our students\n';
  countStudents(process.argv[2])
    .then((data) => {
      response += data.join('\n');
      res.send(response);
    })
    .catch((error) => {
      response += error.message;
      res.send(response);
    });
});

const port = 1245;
app.listen(port, () => {

});

module.exports = app;
