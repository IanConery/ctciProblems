//given an unsorted singly linked list remove the duplicates


//I am assuming that I am given the head of the linked list
//and that the nodes have a val property that contains the nodes value and a next property which points to the next node in the list


// var Node = function(value){
//   this.val = value;
//   this.next = null;
//   this.tail = null;
// };

// Node.prototype.addToList = function(val){
//   if(!this.next &&)
//   this.tail = new Node(val);
// };


//with a hash first



var removeDups = function(head){
  var valHash = {};
  var node = head;
  var newList = null;

  while(node){
    if(!node.next){}
    valHash[node.val] ? valHash[node.val]++ : valHash[node.val] = 1;
    node = node.next;
  }
  for(var key in valHash){
    if(!newList){
      newList = new Node(key);
    }else{
      newList.addNode(key);
    }
  }
};