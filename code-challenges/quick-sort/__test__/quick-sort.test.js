'use strict';

const quickSort = require('../quick-sort.js');

// console.log(typeof('quick-Sort',QuickSort([8,4,23,42,16,15])));
describe('quick-Sort', ()=> {

  it('quick-Sort([8,4,23,42,16,15])', ()=> {
    expect(quickSort([8,4,23,42,16,15],0,5)).toEqual([4,8,15,16,23,42]);
  });

  it('Reverse-sorted quick-Sort([20,18,12,8,5,-2])', ()=> {
    expect(quickSort([20,18,12,8,5,-2],0,5)).toEqual([-2,5,8,12,18,20]);
  });

  it('Few uniques quick-Sort([5,12,7,5,5,7])', ()=> {
    expect(quickSort([5,12,7,5,5,7],0,5)).toEqual([5,5,5,7,7,12]);
  });
  it('Nearly-sorted quick-Sort([2,3,5,7,13,11])', ()=> {
    expect(quickSort([2,3,5,7,13,11],0,5)).toEqual([2,3,5,7,11,13]);
  });


});
