'use strict';
// eslint-disable-next-line no-unused-vars
const Stack = require('../stacks.js');
const Queue = require('../queues.js');
// const {Node, Stack, Queue} = require('../stacks-and-queues.js');

describe(`Testing stacks and queues`, () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(4);
    expect(stack.top.value).toEqual(4);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(4);
    expect(stack.top.value).toEqual(4);
    stack.push(5);
    expect(stack.top.value).toEqual(5);
    expect(stack.top.next.value).toEqual(4);
    stack.push(6);
    expect(stack.top.value).toEqual(6);
    expect(stack.top.next.value).toEqual(5);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(5);
    stack.push(6);
    let popped = stack.pop();
    expect(popped).toEqual(6);
    expect(stack.top.value).toEqual(5);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(5);
    stack.push(6);
    expect(stack.peek()).toEqual(6);
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(4);
    expect(queue.rear.value).toEqual(4);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.front.value).toEqual(4);
    expect(queue.front.next.value).toEqual(5);
    expect(queue.front.next.next.value).toEqual(6);
    expect(queue.rear.value).toEqual(6);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);
    expect(queue.dequeue()).toEqual(6);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.peek()).toEqual(4);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull;
    expect(queue.rear).toBeNull;
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });
});
