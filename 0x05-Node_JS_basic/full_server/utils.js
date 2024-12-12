// full_server/utils.js
import fs from 'fs';
import path from 'path';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      lines.slice(1).forEach(line => {
        const [firstname, , , field] = line.split(',');

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      resolve(students);
    });
  });
};
