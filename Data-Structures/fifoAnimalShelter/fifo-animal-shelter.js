'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

////////////////////////////////////////
class AnimalShelter {
  constructor(){
    this.dogFront = null;
    this.catFront = null;
    this.dogRear = null;
    this.catRear = null;
  }

  enqueue(value){
    if (value.toLowerCase() !== 'dog' && value.toLowerCase() !== 'cat') {
      return null;
    }
    let newNode = new Node(value.toLowerCase());
    ///////////////////////
    if (value.toLowerCase() === 'dog') {
      if(!this.dogFront){
        this.dogFront = newNode;
        this.dogRear = newNode;
        return this;
      }
      this.dogRear.next = newNode;
      this.dogRear = newNode;
      return this;

    }
    if (value.toLowerCase() === 'cat') {
      if(!this.catFront){
        this.catFront = newNode;
        this.catRear = newNode;
        return this;
      }
      this.dogRear.next = newNode;
      this.catRear = newNode;
      return this;

    }
  }
  ///////////////////////

  dequeue(pref){
    if (!this.dogFront && !this.catFront){
      return 'Empty Queue';
    }
    if (pref.toLowerCase() !== 'dog' && pref.toLowerCase() !== 'cat') {
      return 'choose dog or cat';
    }
    if (pref.toLowerCase() === 'dog') {
      if (!this.dogFront.next){
        let temp = this.dogFront;
        this.dogFront = null;
        this.dogRear = null;
        temp.next = null;
        return temp.value;
      }
      let temp = this.dogFront;
      this.dogFront = this.dogFront.next;
      temp.next = null;
      return temp.value;
    }
    if (pref.toLowerCase() === 'cat') {
      if (!this.catFront.next){
        let temp = this.catFront;
        this.catFront = null;
        this.catRear = null;
        temp.next = null;
        return temp.value;
      }
      let temp = this.catFront;
      this.catFront = this.catFront.next;
      temp.next = null;
      return temp.value;
    }
  }
}

module.exports = AnimalShelter;
