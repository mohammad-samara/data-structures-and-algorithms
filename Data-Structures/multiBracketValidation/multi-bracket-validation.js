'use strict';

function multiBracketValidation(str){
  const checker = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      checker.push(str[i]);
    }
    if ((str[i] === ')' && checker[checker.length - 1] === '(')
      || (str[i] === '}' && checker[checker.length - 1] === '{')
      || (str[i] === ']' && checker[checker.length - 1] === '[')) {
      checker.pop();
    } else if ((str[i] === ')' && checker[checker.length - 1] !== '(')
      || (str[i] === '}' && checker[checker.length - 1] !== '{')
      || (str[i] === ']' && checker[checker.length - 1] !== '[')) {
      return false;
    }
  }
  if (checker.length === 0) return true;
  return false;
}

module.exports = multiBracketValidation;

