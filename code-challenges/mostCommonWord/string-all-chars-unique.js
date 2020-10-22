'use strict';

module.exports = function onlyUniqueWords(str) {
  str = str.toLowerCase();
  let arr = str.match(/[a-zA-Z]+\b/g)
  let wordsObj = {};
  if (!arr) {
    return null;
  }
  while (arr.length) {
    let word = arr.shift();
    if (wordsObj[word] !== undefined) {
      return 'not unique';
    }else {wordsObj[word] = word ;}
  }
  return 'all unique';
}


// function onlyUniqueCharacters(str) {
//     str = str.toLowerCase();
//     let arr = str.match(/[a-zA-Z]/g)
//     let wordsObj = {};
//     if (!arr) {
//       return null;
//     }
//     while (arr.length) {
//       let word = arr.shift();
//       if (wordsObj[word] !== undefined) {
//         return 'not unique';
//       }else {wordsObj[word] = word ;}
//     }
//     return 'all unique';
//   }

//   console.log(onlyUniqueCharacters("hi my name is samara and i like games"));
//   console.log(onlyUniqueCharacters("abc def ghi"));
