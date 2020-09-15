/* eslint-disable linebreak-style */

export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Персонаж уже в команде');
    }
    this.members.add(person);
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
