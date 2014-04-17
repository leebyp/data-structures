var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newnode = makeNode(value);
    if(this.head === null){
      this.head = newnode;
      this.tail = newnode;
    }
    else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  };

  list.removeHead = function(){
    var removed = this.head;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target, node){
    node = node || this.head;
    if (node.value === target){
      return true;
    }
    if (node.next !== null){
      return this.contains(target, node.next);
    }
    else {
      return false;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
