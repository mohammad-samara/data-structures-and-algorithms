'use strict';
let obj ={};
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

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
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
    this.map = new Array(size);
  }

  hash(key) {
    // I will has my key to get the index of where to store my data.
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {

    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    // pass entry to the map
    // using object, you can use anything
    let entry = {[key]: value};
    // add to our linkedlist
    this.map[hash].add(entry);
  }

  // To find one key values
  get(key) {
    // find a key in the hashmap and return its value
    let hash = this.hash(key);
    return this.map[hash]?this.map[hash].values():'key not found';
  }

  // To check if the key exist in the hash map array
  contains(key) {
    let hash = this.hash(key);
    return this.map[hash]?true:false;
    // find a key in the hashmap and return its value
  }


}


function combine(myHash1,myHash2){
  let arr=[];
  myHash1.map.forEach( (data, i )=> {
    let key = Object.keys(data.values()[0])[0];
    data && arr.push([key]);
    data && data.values().forEach( (ele,i)=>{
      arr[arr.length - 1].push(ele[key]);
    });
  });
  arr.forEach((data, i )=> {
    if (myHash2 && myHash2.get(data[0]) != 'key not found'){
      myHash2.get(data[0]).forEach( (ele,i)=>{
        data.push(ele[data[0]]);
      });
    }else{
      data.push(null);
    }
  });
  return arr;
}

obj.combine=combine;
obj.Hashmap=Hashmap;
console.log(obj);
module.exports=obj;
