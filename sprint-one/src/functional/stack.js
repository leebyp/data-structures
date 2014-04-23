var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    storage[size++] = value;
  };

  instance.pop = function(){
    size && size--;
    var value = storage[size];
    delete storage[size];
    return value;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
