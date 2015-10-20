//Create a function that given an element in an N X M matrix, if that element is 0 its entire row and column are set to 0
//Example input: [[1,2,3,4][5,6,7,8][9,0,2,3][4,5,6,7]] output: [[1,0,3,4][5,0,7,8][0,0,0,0][4,0,6,7]]

//Time: O(n^3) Space: O(n)
var zeroMatrix = function(matrix){
  var rowTracker = [];
  var columnTracker = [];

  matrix.forEach(function(array, matrixIndex){
    array.forEach(function(element, arrayIndex){
      if(element === 0){
        rowTracker.push(matrixIndex);
        columnTracker.push(arrayIndex);
      }
    });
  });
  if(rowTracker.length > 0){
    rowTracker.forEach(function(rowIndex){
      matrix[rowIndex].forEach(function(item, index, array){
        array[index] = 0;
      });
    });
  }
  if(columnTracker.length > 0){
    columnTracker.forEach(function(columnIndex){
      matrix.forEach(function(array){
        array.forEach(function(item, index){
          if(index === columnIndex){
            array[index] = 0;
          }
        });
      });
    });
  }
  return matrix;
};
