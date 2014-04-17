var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree = _(newTree).extend(treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = makeTree(value);
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
