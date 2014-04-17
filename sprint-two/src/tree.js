var makeTree = function(value){
  var newTree = {};
  _(newTree).extend(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newchild = makeTree(value);
	this.children.push(newchild);
};

treeMethods.contains = function(target){
	var result = result || false;
	if(this.value === target){
		return true;
	}
	if (result){
		return true
	}
	if(this.children.length){
		for (var i=0; i<this.children.length; i++){
			result = this.children[i].contains(target);
			if (result){
				break;
			}
		}
	}
	return result
};