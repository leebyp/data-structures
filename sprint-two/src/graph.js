var Graph = function(){
  this._storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this._storage[newNode] = {};
  var storage = Object.keys(this._storage);
  if (storage.length === 2) {
    this.addEdge(newNode, storage[0]);
  } else {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  var allnodes = Object.keys(this._storage);
  for (var i=0; i<allnodes.length; i++){
    if (node === allnodes[i]){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var edge in this._storage.node) {
    delete this._storage[edge][this._storage.node];
  }
  delete this._storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this._storage[fromNode][toNode] === true &&
  this._storage[toNode][fromNode] === true) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this._storage[fromNode] && this._storage[toNode]) {
    this._storage[fromNode][toNode] = true;
    this._storage[toNode][fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this._storage[fromNode][toNode];
  delete this._storage[toNode][fromNode];
  this.clearGraph();
};

Graph.prototype.forEachNode = function(func) {
  for (var key in this._storage) {
    func(this._storage[key], key);
  }
};

Graph.prototype.clearGraph = function() {
  for( var item in this._storage) {
    if(Object.keys(this._storage[item]).length === 0){
      delete this._storage[item];
    }
  }
};
