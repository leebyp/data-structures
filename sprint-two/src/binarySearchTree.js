var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree = _(newTree).extend(binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  var newNode = makeBinarySearchTree(value);

  var handleAll = function(node){
    if (value > node.value){
      if(node.right === null){
        node.right = newNode;
      }
      else {
        handleAll(node.right);
      }
    }
    else if (value < node.value){
      if (node.left === null){
        node.left = newNode;
      }
      else {
        handleAll(node.left);
      }
    }
  }

  handleAll(this);

};

binaryTreeMethods.contains = function(value){

  var handleAll = function(node) {

    if(node.value === value) {
      return true;
    }

    if (value > node.value) {
      if(node.right === null) {
        return false;
      } else {
        return handleAll(node.right);
      }
    }
    else if (value < node.value) {
      if(node.left === null) {
        return false;
      } else {
        return handleAll(node.left);
      }
    }

  };

  return handleAll(this);

};

binaryTreeMethods.depthFirstLog = function(func){


  func(this.value)

  if(this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if(this.right !== null) {
    this.right.depthFirstLog(func);
  }

  //   var handleAll = function(node) {
  //     func(node.value)

  //     if(node.left !== null) {
  //       handleAll(node.left);
  //     }

  //     if(node.right !== null) {
  //       handleAll(node.right);
  //     }

  //   };\

  // handleAll(this);

};
binaryTreeMethods.breadthFirstLog = function(func){

  // func(this.value);

  // var handle = function(node){
  //   if(this.left !== null) {
  //     func(this.left);
  //     var left = true;
  //   } else {
  //     var left = false;
  //   }

  //   if(this.right !== null) {
  //     func(this.right)
  //     var right = true;
  //   } else {
  //     var right = false;
  //   }
  //   if(left) {
  //     handle(this.left);
  //   }
  //   if(right) {
  //     handle(this.right);
  //   }
  // };

  // handle(this);
  //

  var queue = [];
  queue.push(this);     //5
  // say queue node

  function deEnqueue(){
    var tempnode = queue.shift();
    func(tempnode.value);
    if (tempnode.left !== null){
      queue.push(tempnode.left);
    }
    if (tempnode.right !== null){
      queue.push(tempnode.right);
    }
  }

  while(queue.length > 0){
    deEnqueue();
  }


};



























