//Given an array without a length property, but a elementAtIndex method wich either return the index or -1, find the element in the array, if there are multiple elements you can return any index you like

//this assumes that the array is sorted
var searchWithOutLength = function(array, value){
  var first = 0;
  var end = 2000;
  if(elementAtIndex(array[end]) === value){
    return end;
  }else if(elementAtIndex(array[end]) > value){
    // blah blah blah
  }
  //if not within rage then double the end point until it is 
  //once there binary search
};
