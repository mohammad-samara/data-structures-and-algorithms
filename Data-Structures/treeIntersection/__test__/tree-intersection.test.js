'use strict';

const [treeIntersection, BinaryTree, Node] = require('../tree-intersection.js');

let tree1= new BinaryTree();
let tree2= new BinaryTree();
tree1.add('150');
tree1.add('100');
tree1.add('250');
tree1.add('75');
tree1.add('160');
tree1.add('200');
tree1.add('350');
tree1.add('125');
tree1.add('175');
tree1.add('300');
tree1.add('500');

tree2.add('42');
tree2.add('100');
tree2.add('600');
tree2.add('200');
tree2.add('350');
tree2.add('15');
tree2.add('160');
tree2.add('500');
tree2.add('4');
tree2.add('175');
tree2.add('125');

describe('treeInsertion', ()=> {

  it('return an array of the dublicate value in two different trees', ()=> {
    expect(treeIntersection(tree1,tree2)).toEqual(['100','125','160','200','175','350','500']);
  });

});
