'use strict';
function insertShiftArray(arr,value){
  let middleIndex = Math.ceil(arr.length/2);
  let newArr = [];
  for (let i=0;i<middleIndex;i++){
    newArr[newArr.length] = arr[i];
  }
  newArr[newArr.length] = value;
  for (let j = middleIndex;j<arr.length;j++){
    newArr[newArr.length]= arr[j];
  }
  return newArr;
}
module.exports = insertShiftArray;


console.log(insertShiftArray([1,3],2));
