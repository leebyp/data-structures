var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeOf = 0; // Hint: set an initial value here

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.sizeOf++] = value;
};

stackMethods.pop = function(){
  this.sizeOf && this.sizeOf--;
  var value = this.storage[this.sizeOf];
  delete this.storage[this.sizeOf];
  return value;
};

stackMethods.size = function(){
  return this.sizeOf;
  //console.log( this.sizeOf);
}
