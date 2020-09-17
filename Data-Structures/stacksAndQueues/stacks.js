'use strict';

const Node = require('./node.js');

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    return this.top;
  }

  pop(){
    if(!this.top){
      return 'Stack is empty';
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(!this.top){
      return 'Stack is empty';
    }
    return this.top.value;
  }

  isEmpty(){
    return !this.top ? true : false;
  }

}

module.exports = Stack;
