'use strict';

function sumMatrix(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let oneArrAcc = 0;
    for (let j = 0; j < arr[i].length; j++) {
      oneArrAcc = oneArrAcc + arr[i][j];
    }
    finalArr[finalArr.length] = oneArrAcc;
  }


  return finalArr
}


const testArr = [[1, null, 3], [3, 5, 7], [1, 7, 10]];
const testArr2 = [[1, 2, 3], [3, 1], [1], [2, -2]];
const testArr3 = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]];
console.log(sumMatrix(testArr));
console.log(sumMatrix(testArr2));
console.log(sumMatrix(testArr3));
