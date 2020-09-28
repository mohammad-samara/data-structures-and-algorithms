'use strict';

const Node = require('../node');
const BinaryTree = require('../tree');

describe('Binary Tree', ()=> {
  // create a binary tree.
  // traverse it using the 3 methods

  let tree;
  beforeAll(()=> {
    let two = new Node(2);
    let two2 = new Node(2);
    let four = new Node(4);
    let five = new Node(5);
    let five2 = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let nine = new Node(9);
    let eleven = new Node(11);

    two.left = seven;
    two.right = five;
    seven.left = two2;
    seven.right = six;
    six.left = five2;
    six.right = eleven;
    five.right = nine;
    nine.left = four;

    tree = new BinaryTree(two);

  });

  it('breadthFirst()', ()=> {
    let expected = [2,7,5,2,6,9,5,11,4];
    let breadthFirstOutput = tree.breadthFirst();
    console.log('breadthFirstOutput >> ',breadthFirstOutput)
    expect(breadthFirstOutput).toEqual(expected);
  });
});
