'use strict';

const PseudoQueue = require('../queue-with-stacks.js');
let pseudoQueue = new PseudoQueue();

describe('Testing the pseudoqueue class', () => {

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('It should successfully enqueue items', () => {
    pseudoQueue.enqueue('a');
    expect(pseudoQueue.stackOne.top.value).toEqual('a');
    pseudoQueue.enqueue('b');
    expect(pseudoQueue.stackOne.top.value).toEqual('b');
    pseudoQueue.enqueue('c');
    expect(pseudoQueue.stackOne.top.value).toEqual('c');
  });

  it('It should successfully dequeue items', () => {
    pseudoQueue.enqueue('a');
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    expect(pseudoQueue.dequeue()).toEqual('a');
    expect(pseudoQueue.dequeue()).toEqual('b');
    expect(pseudoQueue.dequeue()).toEqual('c');
  });

  it('It should successfully dequeue all items', () => {
    pseudoQueue.enqueue('a');
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.front).toBeNull;
    expect(pseudoQueue.rear).toBeNull;
    expect(pseudoQueue.stackOne.top).toBeNull;
  });

});
