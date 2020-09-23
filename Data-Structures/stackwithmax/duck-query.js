'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(){
    this.elNum =0;
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


function findDuckDuckGoose(players, goose) {
  let queue = new Queue;
  for(let i = 0; i<players.length; i++){
    queue.enqueue(players[i]);
    queue.elNum = queue.elNum+1;
  }
  let originalGoose = goose;
  while(queue.elNum>1){
    goose = originalGoose;
    for(let k = 1; k<=goose;k++){
      while(goose > queue.elNum){goose = goose - queue.elNum;}
      let temp02 = queue.dequeue();

      if(k<goose){queue.enqueue(temp02);}
      console.log(queue.front);
    }
    queue.elNum = queue.elNum-1;
  }
  console.log(queue.front);
  return queue.front;
}
//findDuckDuckGoose(['a', 'b', 'c', 'd'], 8);//b
module.exports = findDuckDuckGoose;

