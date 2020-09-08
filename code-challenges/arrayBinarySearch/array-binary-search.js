'use strict';

function BinarySearch(arr,number){
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  while (lowIndex <= highIndex){
    let midIndex = Math.floor((lowIndex + highIndex)/2);
    if (arr[midIndex] > number){
      highIndex = midIndex - 1;
    } else if (arr[midIndex] < number){
      lowIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

module.exports = BinarySearch;
