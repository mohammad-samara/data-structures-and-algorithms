'use strict'

const Node = require('../../tree/node.js');
const BinaryTree = require('../../tree/tree.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('fizz-buzz-tree', ()=> {
  // create a binary tree.
  // traverse it using the 3 methods

  let tree;
  beforeAll(()=> {
    let two = new Node(2);
    let three = new Node(3);
    let five = new Node(5);
    let ten = new Node(10);
    let eleven = new Node(11);
    let twelve = new Node(12);
    let fifteen = new Node(15);


    two.right = five;
    two.left = three;
    five.right = ten;
    five.left = twelve;
    three.right = eleven;
    three.left = fifteen;

    tree = new BinaryTree(two);

  });

  it('fizzBuzzTree()', ()=> {
    let expected = [2,3,5,15,11,12,10];
    let breadthFirstOutput = tree.breadthFirst();
    expect(breadthFirstOutput).toEqual(expected);
  });
  it('fizzBuzzTree()', ()=> {
    let newFizzBuzzTree = fizzBuzzTree(tree);
    let expected = ['2','Fizz','Buzz','FizzBuzz','11','Fizz','Buzz'];
    let breadthFirstOutput = newFizzBuzzTree.breadthFirst();
    expect(breadthFirstOutput).toEqual(expected);
  });
});
