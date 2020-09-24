'use strict';

// Time O(n) n is the number of nodes
// Space O(h) h is the height of the tree

// Binary Search Tree
// O(log(n))
// O(h)
let Node = require('./node');
// BinarySearchTree add, contains
class BinarySearchTree {
  constructor (){
    this.root = null;
  }

  // add
  add(value){
    let node = new Node(value);
    if (!this.root)
    {
      this.root = node;
    }
    else{
      let insertNode = this.root;
      while(insertNode){
        if (insertNode.value > value){
          if (!insertNode.left){
            insertNode.left = node;
            return;
          }
          else{
            insertNode = insertNode.left;
          }
        }
        else{
          if (!insertNode.right){
            insertNode.right = node;
            return;
          }
          else{
            insertNode = insertNode.right;
          }
        }
      }
    }
  }
  // recursion add
  //   add2(val) {
  //     let newNode = new Node(val);
  //     let _add = (node,newNode)=>{
  //       if(newNode.value < node.value){
  //         if(node.left === null) node.left = newNode;
  //         else _add(node.left, newNode);
  //       }
  //       else{
  //         if(node.right === null) node.right = newNode;
  //         else _add(node.right,newNode);
  //       }
  //     };
  //     if(this.root === null)this.root = newNode;
  //     else _add(this.root, newNode);
  //   }

  // contains
  contains (value){
    let searchNode = this.root;
    while(searchNode){
      if (searchNode.value === value){
        return true;
      }
      else if(searchNode.value < value){
        searchNode = searchNode.right;
      }else{
        searchNode = searchNode.left;
      }
    }
    return false;
  }
}
module.exports = BinarySearchTree;
