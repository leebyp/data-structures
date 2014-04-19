var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var dupe = false;
  if (bucket === undefined) {
    this._storage.set(i, []);
    bucket = this._storage.get(i);
  }

  bucket.forEach(function(pair) {
    if (pair[0] === k) {
      pair[1] = v;
      dupe = true;
    }
  });

  if (!dupe) {
    bucket.push([k, v]);
  }

  this._storage.set(i, bucket);

  this._count++;

  if (this._count > 0.75*this._limit){
    this._limit *= 2;
    this._count = 0;
    this.rehash();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket !== undefined) {
    for(var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k) {
        if (bucket[j][1] === null) {
          return null;
        }
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket !== undefined) {
    for(var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k) {
        bucket[j][1] = null;
      }
    }
  }

  this._count--;

  if (this._count < Math.ceil(0.25 * this._limit)){
    // console.log('Count < 35% threshold');
    // console.log(this._count +'<'+ Math.ceil(0.35*this._limit));
    this._limit = Math.ceil(this._limit/2);
    this._count = 0;
    this.rehash();
    //console.log('count after rehash'+this._count);
  }
};

HashTable.prototype.rehash = function(){

  var tempStore = this._storage;
  this._storage = makeLimitedArray(this._limit);
  var that = this;
  //console.log('===tempstore===')
  //console.log(tempStore)

  // we want to create a temp array and populate

  tempStore.each(function(bucket){
    //console.log('====bucket====');
    //console.log(bucket);
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        if(bucket[i][1] !== null){

          //var newi = getIndexBelowMaxForKey(bucket[i][0], this._limit);
          //that._storage.(newi, bucket[i][1]);
          that.insert(bucket[i][0], bucket[i][1]);
          //console.log('hash counter: ' + that._count);
        }
      }
    }
  });
};
