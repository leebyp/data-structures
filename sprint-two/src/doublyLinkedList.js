var makeDoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newnode = makeNode(value);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.head.previous = newnode; //
      newnode.next = this.head;
      // after switch, reassign head
      this.head = newnode;
    }
  };

  list.addToTail = function(value){
    var newnode = makeNode(value);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    }
    else {
      this.tail.next = newnode;
      newnode.previous = this.tail;
      this.tail = newnode;
    }
  };

  list.removeHead = function(){
    var value = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return value;
  };

  list.removeTail = function(){
    var value = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return value;
  };


  list.contains = function(target, node){
    var doesContain = doesContain || false;
    var node = node || this.head;
    if (node.value === target){
      return true;
    }
    if (node.next !== null) {
      return this.contains(target, node.next);
    }
    return doesContain;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
{
  node0: {
    next: node1
    value: 23
  }
  node1: {
    next: node2
    value: 24
  }
  node2: {

  }
  head: node0
  tail: node2

}
*/
