export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else throw new TypeError('Name must be a string.');
    if (typeof length === 'number') this._length = length;
    else throw new TypeError('Length must be a number.');
    if (students instanceof Array) this._students = students;
    else throw new TypeError('Students must be an array.');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') this._name = newName;
    else throw new TypeError('Name must be a string.');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') this._length = newLength;
    else throw new TypeError('Length must be a number.');
  }

  get students() {
    return this._students;
  }

  set students(newStudnets) {
    if (newStudnets instanceof Array) this._students = newStudnets;
    else throw new TypeError('Students must be an array.');
  }
}
