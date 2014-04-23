var Queue = function() {
  this.storage = {};
  this.sizeOf = 0;
  this.index = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index+this.sizeOf] = value;
  this.sizeOf++;
};

Queue.prototype.dequeue = function(){
  var value = this.storage[this.index];
  this.index++;
  this.sizeOf && this.sizeOf--;
  return value;
};

Queue.prototype.size = function(){
  return this.sizeOf;
};
