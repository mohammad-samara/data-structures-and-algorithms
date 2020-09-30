'use strict'

const Node = require('../../tree/node.js');
const BinaryTree = require('../../tree/tree.js');
const filesCount = require('../treeFilesNumCompare');

describe('filesCount', ()=> {

  it('returns true when tree leaves number is identical', ()=> {
    let tree1;
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
    tree1 = new BinaryTree(two);

    let tree2;
    let zero = new Node(0);
    let one = new Node(1);
    let four = new Node(4);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    zero.right = one;
    zero.left = four;
    one.right = six;
    one.left = seven;
    four.right = nine;
    four.left = eight;
    tree2 = new BinaryTree(zero);
    //////////////////////////
    let expected = true;
    let comparisionResult = filesCount(tree1, tree2);
    expect(comparisionResult).toEqual(expected);
  });

  it('returns false when tree leaves number is different', ()=> {
    let tree1;
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
    tree1 = new BinaryTree(two);

    let tree2;
    let zero = new Node(0);
    let one = new Node(1);
    let four = new Node(4);
    let six = new Node(6);
    let seven = new Node(7);

    zero.right = one;
    zero.left = four;
    one.right = six;
    one.left = seven;
    tree2 = new BinaryTree(zero);
    //////////////////////////
    let expected = false;
    let comparisionResult = filesCount(tree1, tree2);
    expect(comparisionResult).toEqual(expected);
  });


});
