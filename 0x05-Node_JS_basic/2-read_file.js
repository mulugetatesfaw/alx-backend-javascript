const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Number of students in each field
    const fields = lines[0].split(',');
    const fieldCounts = {};
    fields.forEach(field => {
      fieldCounts[field] = 0;
    });

    // Count students in each field
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

    // Log the number of students in each field
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${getFieldList(lines, field)}`);
    }
  } catch (error) {
    console.error(error.message);
  }
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
countStudents('database.csv');
