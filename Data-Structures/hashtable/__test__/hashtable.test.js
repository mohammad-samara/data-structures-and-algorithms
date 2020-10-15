'use strict';

const Hashmap = require('../hashtable');
let myHash = new Hashmap(1024);
myHash.set('Cat', 'caty');
myHash.set('Owner' ,'samara');


describe('hashtable get()/contain()', ()=> {

  it('get(key) in the hash map', ()=> {
    expect(myHash.get('Owner')).toEqual([ { Owner: 'samara' } ]);
  });

  it('get(key) not in the hash map', ()=> {
    expect(myHash.get('not in the map')).toEqual('key not found');
  });

  it('contains(key) in the hash map', ()=> {
    expect(myHash.contains('Owner')).toEqual(true);
  });
  it('contains(key) not in the hash map', ()=> {
    expect(myHash.contains('not in the map')).toEqual(false);
  });

});
