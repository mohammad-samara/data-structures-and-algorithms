'use strict';

const arrayShift = require('../array-shift');

describe('Array Shifting',()=>{
  it('Number added to the middle of the array',()=>{
    expect(arrayShift([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
    expect(arrayShift([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });
  it('Accepts different types of data',()=>{
    expect(arrayShift(['a','b','d','e'],'c')).toEqual(['a', 'b', 'c', 'd', 'e']);
    expect(arrayShift([true,true],false)).toEqual([true, false, true]);
  });

});
