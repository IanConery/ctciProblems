//Determine if a string contains all unique values
//With and without data structures

// Time: O(n) Space: O(n)
var isUnique = function(str){
  var result = true;
  var letters = {};
  for(var i = 0; i < str.length; i++){
    letters[str[i]] ? letters[str[i]] ++ : letters[str[i]] = 1;
  }
  for(var key in letters){
    if(letters[key] > 1){
      result = false;
    }
  }
  return result;
};

//Now isUnique in Space: O(1) Time: O(n^2)
var isUnique2 = function(str){
  var current = '';
  var result = true;
  for(var i = 0; i < str.length; i++){
    current = str[i];
    var temp = i;
    for(var j = 0; j < str.length; j++){
      if(str[j] === current && j !== i){
        result = false;
      }
    }
  }
  return result;
};

console.log(isUnique2('hello'));