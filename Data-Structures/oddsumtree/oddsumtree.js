'use strict';

function oddSumTree(tree){
  let result = 0;
  let _walk = (node)=>{
    if(node.value % 2 !== 0){
      result += node.value;
    }
    if(node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };
  _walk(tree.root);
  return result;
}

module.exports = oddSumTree;
