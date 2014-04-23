var makeBinarySearchTreeR = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree = _(newTree).extend(binaryTreeMethodsR);
  return newTree;
};

var binaryTreeMethodsR = {};


binaryTreeMethodsR.insert = function(value){
  var newNode = makeBinarySearchTreeR(value);

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
  };

  handleAll(this);

  this.rebalanceCheck();
};

binaryTreeMethodsR.contains = function(value){

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

binaryTreeMethodsR.depthFirstLog = function(func){


  func(this.value)

  if(this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if(this.right !== null) {
    this.right.depthFirstLog(func);
  }

  // ===== INNER FUNCTION SOLUTION =====
    //   var handleAll = function(node) {
    //     func(node.value)

    //     if(node.left !== null) {
    //       handleAll(node.left);
    //     }

    //     if(node.right !== null) {
    //       handleAll(node.right);
    //     }

    //   };

    // handleAll(this);

};
binaryTreeMethodsR.breadthFirstLog = function(func){

  var queue = [];
  queue.push(this);

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



function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
function sortNum(a,b){
  return a-b;
}


binaryTreeMethodsR.rebalanceCheck = function(){
  // populate an array of all tree values and sort
  var array = [];
  this.depthFirstLog(function(value){
    array.push(value);
  });
  array.sort(sortNum);

  // depth maximum
  var total = array.length;

  // depth minimum
  var dmin = Math.ceil(getBaseLog(2,total+1));

  if (total > 2 * dmin){

    var middleIndex = Math.floor(array.length/2);
    this.value = array[middleIndex];
    this.left = null;
    this.right = null;
    var left = array.slice(0, middleIndex);
    var right = array.slice(middleIndex+1);
    this.rebalance(left);
    this.rebalance(right);
  }

};

binaryTreeMethodsR.rebalance = function(subarray){
  if (subarray.length === 0){
    return;
  }
  if (subarray.length === 1){
    this.insert(subarray[0]);
    return;
  }
  var middleIndex = Math.floor(subarray.length/2);
  var left = subarray.slice(0, middleIndex);
  var middle = subarray[middleIndex];
  var right = subarray.slice(middleIndex+1);
  this.insert(middle); // actual activity
  this.rebalance(left);
  this.rebalance(right);

  // this.rebalance(left)
  // this.rebalance(right);


  // var newTree = makeBinarySearchTree(initialValue);
  // var splitted = array.split()
  //for (var i=0; i<array.length; i++){
  //  newTree.insert();
  //}
};




//  [1,3,5,6,9,11,22,33]
//  if numbers.length === 1
//  if odd, floor/round
//    add this number to array
//      split at this index
//
