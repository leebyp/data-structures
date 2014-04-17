var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newnode = makeNode(value);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    }
    else {
      //this.head.next = newnode;
      this.tail.next = newnode;
      this.tail = newnode;
    }
  };

  list.removeHead = function(){
    this.head = this.head.next;
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
