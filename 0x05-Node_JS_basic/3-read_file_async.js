const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const lines = data.split('\n').filter((line) => line);
    const students = lines.slice(1).map((line) => line.split(','));
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    }

    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
