import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be string');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    const attributes = `${this.amount} ${this.currency.name} (${this.currency.code})`;
    return attributes;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be number');
    }
    return amount * conversionRate;
  }
}
