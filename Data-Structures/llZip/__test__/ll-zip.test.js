
const LinkedList = require('../../linkedList/linked-list');
const zipLists = require('../ll-zip.js');
describe('Linked List', ()=> {
  it('zipLists() case 1', ()=> {
    let first = new LinkedList();
    let second = new LinkedList();
    first.append(1);
    first.append(2);
    first.append(3);
    first.append(4);

    second.append(5);
    second.append(6);
    second.append(7);
    second.append(8);
    expect(zipLists(first,second).toString()).toEqual('{ 1 } -> { 5 } -> { 2 } -> { 6 } -> { 3 } -> { 7 } -> { 4 } -> { 8 } -> NULL');
  });

  it('zipLists() case 2', ()=> {
    let first = new LinkedList();
    let second = new LinkedList();
    first.append(1);
    first.append(2);
    first.append(3);

    second.append(5);
    second.append(6);
    second.append(7);
    second.append(8);
    expect(zipLists(first,second).toString()).toEqual('{ 1 } -> { 5 } -> { 2 } -> { 6 } -> { 3 } -> { 7 } -> { 8 } -> NULL');
  });

  it('zipLists() case 3', ()=> {
    let first = new LinkedList();
    let second = new LinkedList();
    first.append(1);
    first.append(2);
    first.append(3);
    first.append(4);
    first.append(9);

    second.append(5);
    second.append(6);
    second.append(7);
    second.append(8);
    expect(zipLists(first,second).toString()).toEqual('{ 1 } -> { 5 } -> { 2 } -> { 6 } -> { 3 } -> { 7 } -> { 4 } -> { 8 } -> { 9 } -> NULL');
  });
});
