'use strict';
// 1st loop solution
function fibonacci(num) {
  var a = 1, b = 0, temp;

  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

//1st recursive solution
// function fibonacci(num) {
//   if (num <= 1) return num;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

////////////////
//more related to human language solution
// function fibonacci(num){
//   if(num ==0){return 0;}
//   var a = 0, b = 1, future;
//   for(let i = 0; i<num-1; i++){
//     future = a + b;
//     a = b;
//     b = future
//   }
//   return b;
// }

fibonacci(13);
