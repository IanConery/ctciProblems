//Designe a stack with push, pop, and min. Min should return the minimum element in the stack. All methods should work in O(1) time.


var Stack = function(){
  this.length = 0;
  this.min = [];
};

Stack.prototype.push = function(value){
  this.length ++;
  this[this.length] = value;
  if(this.min.length === 0){
    this.min.push(value);
  }else if(this.min[this.min.length - 1] > value){
    this.min.push(value);
  }
};

Stack.prototype.pop = function(){
  if(this.length === 0){
    console.log('nothing in stack');
  }
  var last = this[this.length];
  if(this.min[this.min.length - 1] === this[this.length]){
    this.min.pop();
  }
  delete this[this.length];
  this.length--;
  return last;
};

Stack.prototype.min = function(){
  return this.min[this.min.length - 1];
};


var green = new Stack();
green.push(9);
green.push(91);
green.push(3);
green.push(2);
console.log(green.pop());
console.log(green.pop());
console.log(green.pop());