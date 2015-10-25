//Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference
//Example input: [1,3,15,11,2][23,127,235,19,8] output: [11,8]

var smallestDifference = function(array1, array2){
  var result = [];
  var difference = -1;
  array1 = array1.sort(function(a,b){
    return a > b;
  });
  array2 = array2.sort(function(a,b){
    return a > b;
  });
  for(var i = 0; i < array1.length; i++){
    for(var k = 0; k < array2.length; k++){
      if(difference === -1){
        result = [array1[i], array2[k]];
        difference = Math.abs(array1[i] - array2[k]);
      }else if(Math.abs(array1[i] - array2[k]) < difference){
        result = [array1[i], array2[k]];
        difference = Math.abs(array1[i] - array2[k]);
      }
    }
  }
  return result;
};

console.log(smallestDifference([1,3,15,11,2],[23,127,235,19,8]))