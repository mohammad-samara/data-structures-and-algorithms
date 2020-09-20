'use strict';

let Stack = require('../stacks.js');

class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(value) {
    if (value) {
      this.stackOne.push(value);
      return this.stackOne.top;
    } else {
      return null;
    }
  }
  // implement dequeue method by pushing all elements
  // from stack 1 into stack 2, which reverses the order
  // and then popping from stack 2

  dequeue() {
    if (this.stackOne.top === null) {
      return 'There is nothing to dequeue, the stack is empty';
    }
    while (this.stackOne.top !== null) {
      let p = this.stackOne.pop();
      this.stackTwo.push(p);
    }

    const result = this.stackTwo.pop();

    while (this.stackTwo.top !== null) {
      let p = this.stackTwo.pop();
      this.stackOne.push(p);
    }

    return result;
  }

}

module.exports = PseudoQueue;
