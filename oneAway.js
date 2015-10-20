//given two strings determine if they are one or zero edits away
//example in: 'hell', 'hello' out: true

var oneAway = function(str1, str2){
  var str1 = str1.split('');
  var str2 = str2.split('');
  var editCount = 0;
  if(Math.abs(str1.length - str2.length) > 1){
    return false;
  }
  if(str1.length === str2.length){
    for(var i = 0; i < str1.length; i++){
      if(str1[i] !== str2[i]){
        editCount ++;
        console.log(editCount, i);
        if(editCount > 1){
          return false;
        }
      }
    }
    return editCount === 0 ? "Zero Edits Away" : "One Edit Away";
  }

};

console.log(oneAway('hello', 'hella'))