const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const rows = data.trim().split('\n');

      const fieldObj = {};

      for (let i = 1; i < rows.length; i += 1) {
        const row = rows[i].split(',');
        const firstName = row[0];
        const field = row[3];

        if (!fieldObj[field]) {
          fieldObj[field] = [];
        }
        fieldObj[field].push(firstName);
      }

      resolve(fieldObj);
    });
  });
}

module.exports = readDatabase;
