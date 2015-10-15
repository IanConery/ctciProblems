//Given two strings, write a method to determine if one is a permutation of another


//solved in Time: O(n) Space: O(n)

var checkPermutations = function(str1, str2){
  var master = '';
  var minor = '';
  var index = -1;
  var result = true;
  if(str1.length > str2.length){
    master = str1;
    minor = str2;
  }else if(str1 < str2){
    master = str2;
    minor = str1;
  }else{
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  for(var i = 0; i < master.length; i++){
    if(master[i] === minor[0] && index === -1){
      index = i;
    }
  }
  if(index > -1){
    for(var i = index, j = 0; i < master.length, j < minor.length; i++, j++){
      if(master[i] !== minor[j]){
        result = false;
      }
    }
  }
  return result;
}; 

