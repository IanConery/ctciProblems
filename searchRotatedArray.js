//given a sorted array of integers that has been rotated an unknown number of times, write a method to find an element in the array, you may assume that the original array was intitialy sorted in increasing order
//Example input: [10,11,12,13,1,2,3,4,5], 5 output: 8 (the index of the array)


//This is not working correctly, will come back to it later
var searchRotatedArray = function(array, number){
  var first = 0;
  var last = array.length - 1;
  var middle = Math.floor(array.length / 2);
  var found = false;
  while(!found){
    if(number === array[middle]){
      found = true;
    }
    if(array[first] < number && number < array[middle]){
      last = middle;
      middle = Math.floor(middle / 2);
    }else if(array[middle] < number && number < array[last]){
      first = middle;
      middle = Math.floor((last - middle) / 2);
    }
  }
  return middle;
};

console.log(searchRotatedArray([1,2,3,4,5,6,7,8], 3))