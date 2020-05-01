const PolynomialLinkedListNode = require("./polynomialLinkedListNode");

class PolynomialLinkedList {
  constructor() {
    this.head = null;
  }

  push(coefficient, power) {
    const newNode = new PolynomialLinkedListNode(coefficient, power);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    if (index > -1) {
      let current = this.head;
      let i = 0;

      while (current !== null && i < index) {
        current = current.next;
        i++;
      }

      return current !== null ? current : undefinded;
    } else {
      return undefined;
    }
  }

  *values() {
    let current = this.head;

    while (current !== null) {
      yield `${current.coefficient}x^${current.power}`

      current = current.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}

module.exports = PolynomialLinkedList
