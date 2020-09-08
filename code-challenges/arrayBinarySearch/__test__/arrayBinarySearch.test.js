'use strict';

const arrayBinarySearch = require('../array-binary-search');

describe('Array Binary Search',()=>{
  it('Returns the index of the searched number in a sorted array',()=>{
    expect(arrayBinarySearch([4,8,15,16,23,42], 15)).toEqual(2);
    expect(arrayBinarySearch([4,8,15,16,23,42], 4)).toEqual(0);
    expect(arrayBinarySearch([5,11,14,18,19,143,256,344], 256)).toEqual(6);
  });

  it('Returns -1 if the number doesn\'t exist',()=>{
    expect(arrayBinarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });

  it('Gives wrong answer if the array is not sorted correctly',()=>{
    expect(arrayBinarySearch([4,8,20,15,16,23,42], 20)).toEqual(-1);
  });

});
