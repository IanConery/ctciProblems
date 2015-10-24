//Write a method to sort an array of strings so that all the anagrams are next to each other
//Example input:[hello, cat, dog, ohell, tac, god] output: [hello, ohell,cat,tac,dog,god]

var groupAnagrams = function(arr){
  var group = [];
  var result = [];
  arr.forEach(function(word, index){
    group.push([word.split('').sort(function(a,b){return a > b}).join(''), index]);
  });
  group.sort().forEach(function(tuple){
    result.push(arr[tuple[1]]);
  });
  return result;
};

console.log(groupAnagrams(['hello', 'cat', 'dog', 'ohell', 'tac', 'god']));