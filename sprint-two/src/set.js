var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item] = true;
};

setPrototype.contains = function(item){
	if (this._storage[item]){
		return true;
	}
	return false;
};

setPrototype.remove = function(item){
	delete this._storage[item];
};
