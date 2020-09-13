'use strict';

let Node = require('../node.js');

describe('Node Module', () => {
  it('contructor()', ()=> {
    const value = 'test value';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
