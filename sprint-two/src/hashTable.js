var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

//k key, v value

HashTable.prototype.insert = function(k, v){
  /*var amount = 0;
  this._storage.each(function(value, key, storage){
  	if (value){
  		amount++;
  	}
  })
  if (amount > this._limit){
  	this._limit *= 2;
  }*/

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  /*var amount = 0;
  this._storage.each(function(value, key, storage){
  	if (value){
  		amount++;
  	}
  })
  if (amount <= this._limit/2){
  	this._limit /= 2;
  }

  var removeArrayElement = function(array, index){
  	array.splice(index, 1, null);
  } 

  this._storage.each(function(value, key, storage){
  	removeArrayElement(storage, k);
  })*/
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};