var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  newTree = _(newTree).extend(treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = makeTree(value);
  newNode.parent = this;
  this.children.push(newNode);
};

treeMethods.contains = function(target, result){
  var result = result || false;

  if(this.value === target) {
    return true;
  }

  if (result !== true){
    for (var i=0; i<this.children.length; i++){
      result = this.children[i].contains(target, result);
    }
  }

  return result;

};

treeMethods.removeFromParent = function(){
  for (var i=0; i<this.parent.children.length; i++){
    if (this.parent.children[i] === this){
      this.parent.children.splice(i,1);
    }
  }
};

treeMethods.traverse = function(func){
  func(this);
  console.log(this);
  for (var i=0; i<this.children.length; i++){
    this.children[i].traverse(func);
  }
};
