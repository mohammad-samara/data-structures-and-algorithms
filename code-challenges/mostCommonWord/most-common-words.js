'use strict';

module.exports = function repeatedWord(str) {
  str = str.toLowerCase();
  let arr = str.match(/[a-zA-Z]+\b/g)
  let wordsObj = {};
  let mostCommon ='';
  let repititionCount = 0;
  if (!arr) {
    return null;
  }
  while (arr.length) {
    let word = arr.shift();
    if (wordsObj[word] !== undefined) {
      wordsObj[word] = wordsObj[word] + 1;
    }else {wordsObj[word] = 1 ;}
  }
  Object.keys(wordsObj).forEach(word => {
    if(wordsObj[word] > repititionCount){
      mostCommon = word;
      repititionCount = wordsObj[word];
    }
  });
  return mostCommon;
}
