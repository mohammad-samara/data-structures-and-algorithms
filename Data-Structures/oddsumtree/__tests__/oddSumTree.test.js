'use strict'

const Node = require('../../tree/node.js');
const BinaryTree = require('../../tree/tree.js');
const oddSumTree = require('../oddsumtree.js');

describe('oddSumTree', ()=> {

  it('oddSumTree()', ()=> {
    let tree;
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
    //////////////////////////
    let expected = 34;
    let oddSumResult = oddSumTree(tree);
    expect(oddSumResult).toEqual(expected);
  });

  it('oddSumTree()', ()=> {
    let tree;
    let two = new Node(2);
    let three = new Node(3);
    let five = new Node(5);
    let eight = new Node(8);
    let twelve = new Node(12);
    let thirteen = new Node(13);


    five.right = three;
    five.left = eight;
    three.right = thirteen;
    eight.right = two;
    eight.left = twelve;
    tree = new BinaryTree(five);
    //////////////////////////
    let expected = 21;
    let oddSumResult = oddSumTree(tree);
    expect(oddSumResult).toEqual(expected);
  });
});
