//Assuming you have a method isSubString which checks if one string is a substring of another. Given two strings str1 and str2, write a funciton that checks if str2 is a rotation of str1 using only one call to isSubString
//Example input: 'waterbottle', 'erbottlewat' output: true

//I am asuming that isSubString returns the index inside of string one where string two starts or -1 
//in this case it would return 2 because bottle is a substring of waterbottle
//I am manually passing the return as one of the arguments so that I can use this function and make sure that it works correctly

var stringRotation = function(str1, str2, returnOfIsSub){
  // returnOfIsSub = str2.isSubString(str1);
  var reorganized = '';

  for(var i = (str2.length - 1) - returnOfIsSub; i < str1.length; i++){
    reorganized += str2[i];
  }
  for(var i = 0; i < returnOfIsSub; i++){
    reorganized += str2[i];
  }
  for(var i = reorganized.length; i < str1.length; i++){
    reorganized += str1[i];
  }
  if(reorganized === str1){
    return true;
  }else{
    return false;
  }
};
