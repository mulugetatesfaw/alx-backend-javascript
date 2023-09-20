const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fields = lines[0].split(',');
      const fieldCounts = {};

      for (const field of fields) {
        fieldCounts[field] = 0;
      }

      for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(',');
        if (studentData.length === fields.length) {
          fields.forEach((field, index) => {
            if (studentData[index].trim() !== '') {
              fieldCounts[field]++;
            }
          });
        }
      }

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in fieldCounts) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${getFieldList(lines, field)}`);
      }

      resolve();
    });
  });
}

function getFieldList(lines, field) {
  const index = lines[0].split(',').indexOf(field);
  const list = [];

  for (let i = 1; i < lines.length; i++) {
    const studentData = lines[i].split(',');
    if (studentData.length > index && studentData[index].trim() !== '') {
      list.push(studentData[index]);
    }
  }

  return list.join(', ');
}

// Usage example
countStudents('database.csv')
  .catch(error => console.error(error.message));
