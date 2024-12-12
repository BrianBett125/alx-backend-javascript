// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      let response = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fields.forEach(field => {
        const names = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase('./database.csv');
      const names = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
