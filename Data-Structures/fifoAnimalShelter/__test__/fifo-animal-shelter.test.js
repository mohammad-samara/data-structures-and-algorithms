'use strict';
// eslint-disable-next-line no-unused-vars
const Queue = require('../fifo-animal-shelter.js');
// const {Node, Stack, Queue} = require('../stacks-and-queues.js');

describe(`Testing AnimalShekter queues`, () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('dog');
    expect(queue.dogRear.value).toEqual('dog');
    expect(queue.catRear).toBeNull;
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('dog');
    queue.enqueue('cat');
    queue.enqueue('dog');
    expect(queue.dogFront.value).toEqual('dog');
    expect(queue.dogFront.next.value).toEqual('dog');
    expect(queue.catFront.value).toEqual('cat');
    expect(queue.dogRear.value).toEqual('dog');
    expect(queue.catRear.value).toEqual('cat');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('dog');
    queue.enqueue('cat');
    queue.enqueue('dog');
    expect(queue.dequeue('dog')).toEqual('dog');
    expect(queue.dequeue('dog')).toEqual('dog');
    expect(queue.dequeue('cat')).toEqual('cat');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.dequeue('dog');
    queue.dequeue('dog');
    queue.dequeue('dog');
    expect(queue.dogFront).toBeNull;
    expect(queue.dogRear).toBeNull;
  });
});
