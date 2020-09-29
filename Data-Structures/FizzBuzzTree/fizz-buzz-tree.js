'use strict';

function fizzBuzzTree(tree){
  function replace(node){
    if(node.value % 5 === 0 && node.value % 3 === 0){
      node.value = 'FizzBuzz';
    } else if (node.value % 3 === 0){
      node.value = 'Fizz';
    } else if (node.value % 5 === 0){
      node.value = 'Buzz';
    } else {
      node.value = `${node.value}`;
    }
    if(node.left) replace(node.left);
    if(node.right) replace(node.right);
  }

  replace(tree.root);
  return tree;
}

module.exports = fizzBuzzTree;
