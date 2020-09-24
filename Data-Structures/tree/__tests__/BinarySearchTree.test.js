'use strict';

const BinarySearchTree = require('../BinarySearchTree');
let BinarysearchTree= new BinarySearchTree();
describe('Add to BinarySearchTree', ()=> {
  it('add()', ()=> {
    expect(BinarysearchTree.root).toBeNull()
    BinarysearchTree.add(2);
    expect(BinarysearchTree.root.value).toBe(2)
    BinarysearchTree.add(1);
    expect(BinarysearchTree.root.value).toBe(2)
    expect(BinarysearchTree.root.left.value).toBe(1)
    BinarysearchTree.add(3);
    expect(BinarysearchTree.root.value).toBe(2)
    expect(BinarysearchTree.root.right.value).toBe(3)
    BinarysearchTree.add(4);
    expect(BinarysearchTree.root.value).toBe(2)
    expect(BinarysearchTree.root.right.right.value).toBe(4)
  });
});

describe('BinarySearchTree contain', ()=> {
  it('contains()', ()=> {
    expect(BinarysearchTree.contains(3)).toBeTruthy();
    expect(BinarysearchTree.contains(5)).not.toBeTruthy();
  });
});

