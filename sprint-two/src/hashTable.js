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












Collisions

There’s still a serious flaw in the hash table implementation I’ve provided. Sometimes more than one key will generate the same hash index. When that happens, the second element you insert will over-write the first. If you’re using a small max compared to the number of items to be placed in the hash it could happen frequently. With a properly sized storage array, collisions will be rare but they still happen.

The solution is to store linked lists at each bucket location instead of storing the element directly. Each node will have to contain both the element’s key and its value. When retrieving a value, one more step is added to the process. First go to the location of provided by the hashing function– that would be storage[indexFromFunction]. Then traverse the linked list stored there and compare the key of the element being looked up with the key of each element in the list. Once there’s a match, return the associated value.



////
var makeLimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};


var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);    //'<<' binary left shift
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};