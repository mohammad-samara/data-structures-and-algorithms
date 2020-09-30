'use strict';

function filesCount(tree1,tree2){
  let result = 0;
  let counts =[];
  let _walk = (node)=>{
    if(!node.left && !node.right){
      result += 1;
    }
    if(node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };
  _walk(tree1.root);
  counts.push(result);
  result = 0;
  _walk(tree2.root);
  counts.push(result);
  if(counts[0] === counts[1]){return true;}else{return false;}
}

module.exports = filesCount;
