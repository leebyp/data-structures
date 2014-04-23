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
  };

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
binaryTreeMethods.breadthFirstLog = function(func){

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


// function breadthFirstLog(func){

// 	Enqueue the root node
// 	Dequeue a node and examine it
// 	If the element sought is found in this node, quit the search and return a result.
// 	Otherwise enqueue any successors (the direct child nodes) that have not yet been discovered.
// 	If the queue is empty, every node on the graph has been examined – quit the search and return "not found".
// 	If the queue is not empty, repeat from Step 2.

// }

// 	Note: Using a stack instead of a queue would turn this algorithm into a depth-first search.





// BFS,
// 				5
// 		2				8
// 	1		3		6		9

// enqueue 5					[5]
// dequeue 5, check			[]
// enqueue 2, 8				[2,8]
// dequeue 2, check			[8]
// enqueue 1, 3				[8,1,3]
// dequeue 8, check			[1,3]
// enqueue 6, 9				[1,3,6,9]
// dequeue 1, 3, 6, 9

// [5,2,8,1,3,6,9]


// DFS,
// 				5
// 		2				8
// 	1		3		6		9

// stack 	5					[5]
// unstack 5					[]
// stack 	8, 2 				[8,2]
// unstack 2					[8]
// stack 	3, 1				[8,3,1]
// unstack 1					[8,3]
// unstack 3 					[8]
// unstack 8					[]
// stack 9,6					[9,6]
// unstack 6,9					[]

// [5,2,1,3,8,6,9]
