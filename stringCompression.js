//implement a function that takes a string and compresses it down using counts of repeated characters
//if the compressed string is not shorter than the original string return the original string
//Example input: 'aabbbcddddeefgg' output: a2b3c1d4e2f1g2

//Time: O(n) Space O(n)
var stringCompressor = function(string){
  var strHash = {};
  var compressedString = '';
  for(var i = 0; i < string.length; i++){
    strHash[string[i]] ? strHash[string[i]]++ : strHash[string[i]] = 1;
  }
  for(var key in strHash){
    compressedString += key + strHash[key];
  }
  if(compressedString.length >= string.length){
    return string;
  }else{
    return compressedString;
  }
};
