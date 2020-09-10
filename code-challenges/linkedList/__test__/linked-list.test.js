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

});
