export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be string');
    }
    this._code = code;
  }

  displayFullCurrency() {
    const fullCurrency = `${this._name} (${this.code})`;
    return fullCurrency;
  }
}
