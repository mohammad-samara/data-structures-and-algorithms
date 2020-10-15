'use strict';

const Hashmap = require('../hashtable');
let myHash = new Hashmap(1024);
myHash.add('Cat', 'caty');
myHash.add('Owner' ,'samara');
myHash.add('Owner' ,'another samara');


describe('hashtable get()/contain()', ()=> {

  it('get(key) in the hash map', ()=> {
    expect(myHash.get('Owner')).toEqual({ Owner: 'samara' });
  });
  it('getAllLl(key) in the hash map', ()=> {
    expect(myHash.getAllLl('Owner')).toEqual([ { Owner: 'samara' }, { Owner: 'another samara' } ]);
  });
  it('get(key) not in the hash map', ()=> {
    expect(myHash.get('not in the map')).toEqual('key not found');
  });

  it('contains(key) in the hash map', ()=> {
    expect(myHash.contains('Owner')).toEqual(true);
  });
  it('contains(key) not in the hash map', ()=> {
    expect(myHash.contains('notInHashTable')).toEqual(false);
  });

});
