var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[index+size] = value;
    size++;
  };

  instance.dequeue = function(){
    var value = storage[index];
    index++;
    size && size--;
    return value;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};


// 1 1 1
// 0 1 2
// size 3
// index 0

// - 1 1
// 0 1 2
// size 2
// index 1
