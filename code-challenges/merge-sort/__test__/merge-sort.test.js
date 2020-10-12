'use strict';

const mergesort = require('../mergeSort');

console.log(typeof('insertionSort',mergesort([8,4,23,42,16,15])));
describe('insertionSort', ()=> {

  it('insertionSort([8,4,23,42,16,15])', ()=> {
    expect(mergesort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });

  it('Reverse-sorted insertionSort([20,18,12,8,5,-2])', ()=> {
    expect(mergesort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
  });

  it('Few uniques insertionSort([5,12,7,5,5,7])', ()=> {
    expect(mergesort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
  });
  it('Nearly-sorted insertionSort([2,3,5,7,13,11])', ()=> {
    expect(mergesort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });


});
