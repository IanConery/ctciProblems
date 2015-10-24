//You are given two sorted arrays a and b where a is large enough to hold b at the end. Write a method to merge b into a in sorted order

//In place Time: O(n^2) Space: O(1)
var sortedMerge = function(array1, array2){
  for(var i = 0; i < array2.length; i++){
    for(var k = 0; k < array1.length; k++){
      if(array2[i] < array1[k]){
        array1.splice(k, 0, array2[i]);
        i++;
      }
    }
  }
  return array1;
};
//Time: O(n) Space: O(n)
var sortedMerge = function(array1, array2){
  var result = [];
  var pointerTwo = 0;
  var pointerOne = 0;
  while(pointerTwo < array2.length && pointerOne < array1.length){
    if(array2[pointerTwo] <= array1[pointerOne]){
      result.push(array2[pointerTwo]);
      pointerTwo++;
    }else{
      result.push(array1[pointerOne]);
      pointerOne++;
    }
  }
  console.log(array1);
  console.log(array2);
  if(pointerOne < array1.length ){
    for(var i = pointerOne; i < array1.length; i++){
      result.push(array1[i]);
    }
  }
  if(pointerTwo < array2.length ){
    for(var i = pointerTwo; i < array2.length; i++){
      result.push(array2[i]);
    }
  }
  return result;
};



