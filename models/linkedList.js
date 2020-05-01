const LinkedListNode = require("./linkedListNode");
const head = Symbol("head");

class LinkedList {
  constructor() {
    this[head] = null;
  }

  push(data) {
    const newNode = new LinkedListNode(data);
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    if (index > -1) {
      let current = this[head];
      let i = 0;

      while (current !== null && i < index) {
        current = current.next;
        i++;
      }

      return current !== null ? current.data : undefinded;
    } else {
      return undefined;
    }
  }

  *values() {
    let current = this[head];

    while (current !== null) {
      yield current.data;

      current = current.next;
    }
  }

  merge(list) {
    let current1 = this[head];
    let current2 = list[head];

    while (current1 !== null && current2 !== null ){
      current1.data += current2.data;

      current1 = current1.next;
      current2 = current2.next;
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}

module.exports = LinkedList
