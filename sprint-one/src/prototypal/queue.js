var makeQueue = function() {
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.sizeOf = 0;
  instance.index = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index+this.sizeOf] = value;
  this.sizeOf++;
};

queueMethods.dequeue = function(){
  var value = this.storage[this.index];
  this.index++;
  this.sizeOf && this.sizeOf--;
  return value;
};

queueMethods.size = function(){
  return this.sizeOf;
};
