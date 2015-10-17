//given a string write a function that checks if it is a permutation of a palindrome
//ex: in: 'tact coa' out: true permutations 'taco cat' 'atco cta'


var palindromePermutations = function(str){
  str = str.replace(/\s/g, '');
  var length = str.length;
  var letters = {};
  var count = 0;

  for(var i = 0; i < str.length; i++){
    letters[str[i]] ? (delete letters[str[i]], count--) : (letters[str[i]] = 1, count++);
  }
  if(count > 1){
    return false;
  }
  if(length % 2 !== 0 && count !== 1){
    return false;
  }
  return true;
};


