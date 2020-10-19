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

  append(value){
    let node = new Node(value);
    //if empty make head(edge case)
    if (!this.head) {
      this.head = node;
      return this;
    }
    //insert at last
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newVal) {
    //if empty return nothing
    if (!this.head) return;
    //if the value is head use insert()
    let node = new Node(newVal);
    let currentNode = this.head;
    if(currentNode.value === value) return this.insert(newVal);
    //if the value is any other node
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
      currentNode = currentNode.next;
    }
    return ;
  }

  insertAfter(value, newVal) {
    //if empty return nothing
    if (!this.head) return;
    //if the value is any other node
    let node = new Node(newVal);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
    }
    return ;
  }

  kthFromEnd(val){
    let myArr=[];
    let current = this.head;
    if(!current){
      return 'Linked list is empty.';
    }
    while (current.next){
      //myArr.push(current.value);
      myArr[myArr.length] = current.value;
      current = current.next;
    }
    myArr.push(current.value);
    const myVar= myArr.length-1;
    const diff = myVar - val ;
    if (val > myVar || val < 0 || val === undefined || typeof val !== 'number'){
      return 'Exception';
    }else{
      return myArr[diff];
    }
  }

  reverse(){
    let newL = new LinkedList();
    let current = this.head;
    let newNode = new Node(current.val);
    newL.insert(newNode.val);
    while(current.next){
      current = current.next;
      let newNode = new Node(current.val);
      newL.insert(newNode.val);
    }
    return newL.toString() ;
  }
  // reverse(){
  //   let current= this.head;
  //   let arr1=[];
  //   while(current.next){
  //     arr1.push(current.value);
  //     current = current.next;
  //   }
  //   arr1.push(current.value);
  //   let reversedArr=[];
  //   for (let i=0 ; i<arr1.length ; i++ ){
  //     reversedArr[i]=arr1[arr1.length-i-1];
  //   }
  //   let newNode = new Node(reversedArr[0]);
  //   let newll = new LinkedList();
  //   newll.head = newNode;
  //   for (let i=1 ; i<reversedArr.length ; i++ ){
  //     newll.append(reversedArr[i]);
  //   }
  //   return newll.toString() ;
  // }

}

// eslint-disable-next-line no-unused-vars
function isPalindrom(ll){
  let newL = new LinkedList();
  let current = ll.head;
  let newNode = new Node(current.val);
  newL.insert(newNode.val);
  while(current.next){
    current = current.next;
    let newNode = new Node(current.val);
    newL.insert(newNode.val);
  }
  // console.log(newL.toString());
  // console.log(ll.toString());
  if(newL.toString() === ll.toString()){
    return true;
  }else{
    return false;
  }
}

// eslint-disable-next-line no-unused-vars
function isPalindrom2(ll){
  let current = ll.head;
  let llString = '';
  let reversedLlString = '';
  while(current){
    llString = llString + current.value;
    reversedLlString = current.value + reversedLlString;
    current = current.next;
  }
  return llString === reversedLlString;
}

// eslint-disable-next-line no-unused-vars
function reverseLinkedList(ll){
  let current = ll.head;
  let prev = null;
  let nextNode;
  while(current){
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  ll.head = prev;
  return ll;
}

module.exports = LinkedList;
