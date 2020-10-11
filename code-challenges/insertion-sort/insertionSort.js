
'use strict';

function insertionSort(arr){

  for (let i = 1 ; i <= arr.length ; i++){
    var j = i - 1;
    var temp = arr[i];

    while (j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      arr[j]= temp;
      j = j - 1;
    }}
  return arr ;
}
module.exports = insertionSort;
