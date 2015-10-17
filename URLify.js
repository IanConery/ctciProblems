//write a method to replace all whitespace in a string with %20
//example input: 'Mr John Smith'  output: 'Mr%20John%20Smith'


var URLify = function(str){
  return str.replace(/\s/g, '%20');
};

