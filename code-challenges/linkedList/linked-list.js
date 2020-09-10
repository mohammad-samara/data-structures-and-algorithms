'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value, this.head);
    if (!this.head){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  includes(value){
    let currentNode = this.head;
    if (value === currentNode.value){return true;}
    else{
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (value === currentNode.value) {return true;}
      }
    }
    return false;
  }

  toString() {
    if(this.head){
      let current = this.head;
      let string = `{ ${current.value} }`;
      while (current.next){
        current = current.next;
        string = string + ` -> { ${current.value} }`;

      }
      return string + ` -> NULL`;}else{
      return '{NULL}';
    }
    // console.log(string);
  }


}

module.exports = LinkedList;
