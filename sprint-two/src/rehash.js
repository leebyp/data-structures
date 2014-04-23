HashTable.prototype.rehash = function(){

  var tempStore = this._storage;
  this._storage = makeLimitedArray(this._limit);
  var that = this;

  tempStore.each(function(bucket){

    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        if(bucket[i][1] !== null){

          //var newi = getIndexBelowMaxForKey(bucket[i][0], this._limit);
          //that._storage.(newi, bucket[i][1]);
          that._storage.insert(bucket[i][0], bucket[i][1]);
          console.log('hash counter: ' + that._count)
        }
      }
    }
  });
};

// insert
//
  if (this._count > 0.75*this._limit){
    this._limit *= 2;
    this._count = 0;
    this.rehash();
  }


// remove
//
  if (this._count < Math.ceil(0.35*this._limit)){
    console.log('Count < 35% threshold');
    console.log(this._count +'<'+ Math.ceil(0.35*this._limit));
    this._limit = Math.ceil(this._limit/2);
    this._count = 0;
    this.rehash();
    console.log('count after rehash'+this._count)
  }


