'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  find(key) { //find the key value in the linked list
    let currentNode = this.head;
    let currentValueObject = currentNode.value;
    if (key === Object.keys(currentValueObject)[0]) { return currentValueObject.key; }
    else {
      while (currentNode.next) {
        currentNode = currentNode.next;
        let currentValueObject = currentNode.value;
        if (key === Object.keys(currentValueObject)[0]) { return currentValueObject.key; }
        else{return 'key not found';}
      }
    }
  }

  values() {
    // return values of nodes in linkedlist : values in array []
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

}


class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); // [] with that size
  }

  hash(key) {
    // I will has my key to get the index of where to store my data.
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value) {
    const hashIndex = this.hash(key);
    if (!this.storage[hashIndex]) {
      this.storage[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    // we already have a value at that index so just prepend to the front of the linkedList
    this.storage[hashIndex].append(entry);
  }

  get(key) {
    //find all values in the index
    const index = this.hash(key);
    //return what value we have of that key index in the storage
    console.log(this.storage[index]);
    return this.storage[index];
  }

  // To find one key values
  //   getOne(key) {
  //     let hash = this.hash(key);
  //     return this.storage[hash]?this.storage[hash].values():'key not found';
  //   }

  // To check if the key exist in the hash map array
  contains(key) {
    let hash = this.hash(key);
    return this.storage[hash] ? true : false;
    // find a key in the hashmap and return its value
  }

  //   containsDeep(key){
  //     const index = this.hash(key);
  //     if (this.storage[index]){
  //       console.log('TRUE',this.storage[index]);
  //       return true;

  //     }else{
  //       console.log('FALSE');
  //       return false;

  //     }
  //   }

}

module.exports = Hashmap;
