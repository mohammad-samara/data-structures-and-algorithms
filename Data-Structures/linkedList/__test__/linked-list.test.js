'use strict';

let LL = require('../linked-list');

// describe('Linked List Module', ()=> {

//   it('constructor()', ()=> {
//     let list = new LL();
//     expect(list.head).toBeNull();
//   });

//   it('append()', ()=> {
//     let list = new LL();
//     let initialValue = 'First One';
//     list.append(initialValue);
//     expect(list.head.value).toEqual(initialValue);

//     let newValue = 'Second Value';
//     list.append(newValue);
//     expect(list.head.value).toEqual(initialValue);
//     expect(list.head.next).not.toBeNull();
//     expect(list.head.next.value).toEqual(newValue);

//     console.log('list -----> ', list);
//   });


// })
///////////////////////////////////

describe('Linked List', ()=> {
  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('insert()', ()=> {
    let list = new LL();
    let insertedFirstValue = 3;
    list.insert(insertedFirstValue);
    let insertedSecValue = 3;
    list.insert(insertedSecValue);
    expect(list.head.next.value).toEqual(insertedFirstValue);

    expect(list.head.value).toEqual(insertedSecValue);

  });
  it('includes()', ()=> {
    let list = new LL();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.includes(5)).toEqual(false);

    expect(list.includes(2)).toEqual(true);
  });
  it('toString()', ()=> {
    let list = new LL();
    expect(list.toString()).toEqual('{NULL}');

    list.insert('c');
    list.insert('b');
    list.insert('a');
    console.log('toString : ', list.toString());
    expect(list.toString()).toEqual(`{ a } -> { b } -> { c } -> NULL`);

  });

  it('Can successfully add a node to the end of the linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.append(6);
    linkedListInstance.append(5);
    expect(linkedListInstance.head.next.value).toStrictEqual(5);
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.append(9);
    linkedListInstance.append(7);
    linkedListInstance.append(5);
    linkedListInstance.append(3);
    linkedListInstance.append(1);
    expect(linkedListInstance.toString()).toStrictEqual('{ 9 } -> { 7 } -> { 5 } -> { 3 } -> { 1 } -> NULL');
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.append(1);
    linkedListInstance.append(2);
    linkedListInstance.append(4);
    linkedListInstance.append(5);
    linkedListInstance.insertBefore(4,3);
    expect(linkedListInstance.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.append(9);
    linkedListInstance.append(8);
    linkedListInstance.insertBefore(9,10);
    expect(linkedListInstance.toString()).toStrictEqual('{ 10 } -> { 9 } -> { 8 } -> NULL');
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.append(1);
    linkedListInstance.append(2);
    linkedListInstance.append(4);
    linkedListInstance.append(5);
    linkedListInstance.insertAfter(2,3);
    expect(linkedListInstance.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.append(10);
    linkedListInstance.append(9);
    linkedListInstance.insertAfter(9,8);
    expect(linkedListInstance.toString()).toStrictEqual('{ 10 } -> { 9 } -> { 8 } -> NULL');
  });
  it('14. Can successfully return the node’s value that is "k" from the end of the linked list', () => {
    const linkedListInstance = new LL();
    linkedListInstance.insert(9);
    linkedListInstance.insert(7);
    linkedListInstance.insert(5);
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.kthFromEnd(0)).toStrictEqual(9);
  });

});
