'use strict';

////////////////////////////////create tree node class
class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

////////////////////////////////////create binary tree class
class BinaryTree{
  constructor(root){
    this.root = root;
  }

  // Preorder (Root, Left, Right)
  perOrder(){
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

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

}
//////////////////////////////
///////////////////////////////////////tree_intersection function
function treeIntersection(tree1, tree2) {
  let results = [];

  const _preOrder = (tree) => {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(tree.root);
    return result;
  };

  let tree1Arr = _preOrder(tree1);
  let tree2Arr = _preOrder(tree2);

  tree1Arr.forEach(val => tree2Arr.includes(val) ? results.push(val) : null);
  return results;
}
///////////////////////

module.exports = [treeIntersection, BinaryTree, Node];
