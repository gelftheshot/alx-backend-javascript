const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response, database) {
    readDatabase(database)
      .then((data) => {
        let message = 'This is the list of our students\n';
        for (const field in data) {
          if (field) {
            message += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(',')}\n`;
          }
        }
        response.status(200).send(message);
      })
      .catch((err) => {
        response.status(500).send(err);
      });
  }

  static getAllStudentsByMajor(request, response, database) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(database)
        .then((data) => {
          const students = data[major] || [];
          response.send(`List: ${students.join(',')}`);
        })
        .catch((err) => {
          response.status(500).send(err);
        });
    }
  }
}

module.exports = StudentsController;
