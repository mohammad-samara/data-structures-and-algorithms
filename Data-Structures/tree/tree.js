'use strict';

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  // Time o(n) : n is the number of nodes
  // Space o(h): h is the height of this tree

  // Root - Left - Right
  preOrder() {
    let output = [];
    let _traverse = (node) => {
      output.push(node.value);
      // Go Left
      if (node.left) _traverse(node.left);
      // Go Right
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return output;
  }

  // Left - Root - Right
  inOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    }

    _traverse(this.root);
    return output;
  }

  // Left - Right - Root
  postOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    }
    _traverse(this.root);
    return output;
  }

  findMaximumValue(){
    let maxValue = 0;
    let _walk = (node)=>{
      if(node.value > maxValue){
        maxValue = node.value;
      }
      if(node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return maxValue;
  }

  breadthFirst(){
    let results = [];
    let queue = [];
    if(!this.root){return 'empty tree';}
    queue.push(this.root);
    while(queue.length){
      let node = queue.shift();
      results.push(node.value);
      if(node.left !==null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    return results;
  }

}

module.exports = BinaryTree;
