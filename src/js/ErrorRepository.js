/* eslint-disable linebreak-style */

export default class ErrorRepository {
  constructor() {
    this.errorLogs = new Map();
  }

  addError(number, string) {
    this.errorLogs.set(number, string);
  }

  translate(code) {
    if (this.errorLogs.has(code)) {
      return this.errorLogs.get(code);
    }
    return 'Unknown error';
  }
}
