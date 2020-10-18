'use strict';
//easy solution without using hashtable
/*
function repeatedWord(str){
  var myArr = str.toLowerCase().split(' ');
  let repeated = [];
  for (let i=0 ; i<myArr.length ; i++){
    for(let j=i+1 ; j<myArr.length ; j++){
      if(myArr[i]=== myArr[j]){
        repeated[0]=myArr[i];
        j = myArr.length;
        i = myArr.length;
      }
    }
  }
  if(repeated[0]){
    return repeated[0];
  }else{
    return 'No repeated words';
  }
}
*/
//////////////////////////////////////
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
    console.log('-------------------------------',key);
    let currentNode = this.head;
    let currentValueObject = currentNode.value;
    if (key === Object.keys(currentValueObject)[0]) { return currentValueObject; }
    else {
      while (currentNode.next) {
        currentNode = currentNode.next;
        let currentValueObject = currentNode.value;
        if (key === Object.keys(currentValueObject)[0]) { return currentValueObject; }
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
    //find the first matched key value in the index
    const index = this.hash(key);
    //return what value we have of that key index in the storage
    console.log(this.storage[index]);
    return this.storage[index]? this.storage[index].find(key) : 'key not found';
  }

  // To find the whole ll at index generated from the key
  getAllLl(key) {
    let hash = this.hash(key);
    return this.storage[hash]?this.storage[hash].values():'key not found';
  }

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
//////////////////////////////////////////
//second solution using hashtable
function repeatedWord (str){
  let arrStr = str.split(',').join('').toLowerCase().split(' ');
  let map = new Hashmap(1024);
  // console.log(arrStr);
  for(let i=0 ; i< arrStr.length;i++){
    if (map.get(arrStr[i])==='key not found'){
      map.add(arrStr[i], 'any value');
    }else{
      return arrStr[i];
    }
  }
  return 'All unique';
}

module.exports = repeatedWord;
