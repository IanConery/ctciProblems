//Implement a queue only using two stacks

var Stack = function(){
  this.length = 0;
};

Stack.prototype.push = function(value){
  this.length ++;
  this[this.length] = value;
};

Stack.prototype.pop = function(){
  if(this.length === 0){
    console.log('nothing in stack');
  }
  var last = this[this.length];
  delete this[this.length];
  this.length--
  return last;
};



var Queue = function(){
  this.inStack = new Stack();
  this.outStack = new Stack();
};

Queue.prototype.addToQueue = function(item){
  this.inStack.push(item);
};

Queue.prototype.removeFromQueue = function(){
  if(this.outStack.length === 0){
    while(this.inStack.length !== 0){
      this.outStack.push(this.inStack.pop());
    }
    console.log('popping with dumping');
    return this.outStack.pop();
  }else{
    console.log('popping without dumping');
    return this.outStack.pop();
  }
};

