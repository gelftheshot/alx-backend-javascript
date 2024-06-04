const readDatabase = require('../utils');

export default class StudentsController {
  static getAllStudents(request, response, database) {
    let mess = 'This is the list of our students\n';
    readDatabase(database)
      .then((data) => {
        for (const field of data) {
          mess += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(',')}`;
          response.send(200, mess);
        }
      })
      .catch((err) => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, database) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(database)
        .then((data) => {
          response.send(`List: ${data[major].join(',')}`);
        })
        .catch((err) => {
          response.send(500, 'Cannot load the database');
        });
    }
  }
}
