'use strict';

const obj = require('../left-join.js');

let myHash1 = new obj.Hashmap(1024);
myHash1.set('Cat', 'catty');
myHash1.set('cat2', 'catty');
myHash1.set('Owner' ,'samara');

let myHash2 = new obj.Hashmap(1024);
myHash2.set('Cat', 'Hello');
myHash2.set('Owner' ,'mohammad');
myHash2.set('Owner' ,'mohammad');

describe('hashtable get()/contain()', ()=> {

  it('get(key) in the hash map', ()=> {
    expect(obj.combine(myHash1,myHash2)).toEqual([
      [ 'cat2', 'catty', null ],
      [ 'Cat', 'catty', 'Hello' ],
      [ 'Owner', 'samara', 'mohammad', 'mohammad' ],
    ]);
  });
});