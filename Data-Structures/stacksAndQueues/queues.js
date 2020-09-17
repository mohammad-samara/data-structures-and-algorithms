'use strict';

const Node = require('./node.js');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(!this.front){
      this.front = newNode;
      this.rear = newNode;
      return this;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    return this;
  }

  dequeue(){
    if (!this.front){
      return 'Empty Queue';
    }
    if (!this.front.next){
      let temp = this.front;
      this.front = null;
      this.rear = null;
      temp.next = null;
      return temp.value;
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if (!this.front){
      return null;
    }
    return this.front.value;
  }

  isEmpty(){
    return !this.front ? true : false;
  }
}

module.exports = Queue;
