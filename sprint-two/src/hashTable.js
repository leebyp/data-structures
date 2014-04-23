var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

//k key, v value

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






// wiki on ways of solving collisions in hash tables
//==================================

// open hashing(separate chaining),
// key => index(bucketarray) => entries with same index form a linked list within same bucketarray
// time = constant time + list time
// //worse case scenario list time (n)
// //having an ordered list, approx 1/2 cost unsuccessful lookups
// //unordered list with move-to-front, if some keys more likely


// array hash table (using a bucket array),
// key => index(bucketarray) => entries with same index form a dynamic array within the bucketarray
// //dynamic array, grown only by need bytes


// closed hashing(open addressing),
// key => index(bucketarray) hashed-to slot => /*some probe sequence*/ until empty slot found
// //when search, scan bucket in same sequence starting at first hash location, until target found, or unused array slot found (no such key)
// //when found, use the original key to decode!
// //linear probing,fixed intervals (usually 1)
// //quadratic probing, interval increased by adding successive outputs of quadratic to starting value
// //double hashing, interval computed by another hash function within the particular bucket

// how to know which key at the particular index, and which were added on, using closed hashing?
// eg. hash function, string.length
// insert:
//   dog => 3, store ['dog', 'puppy'] in array[3]
//   cat => 3 => 4, store ['cat', 'kitten'] in array[4]
//   dog => 3, array[3][0] is 'dog', overwrite
// retrieve:
//   dog => 3, check array[3][0] === dog, success
//   cat => 3, check array[3][0] === cat, fail, check array[4,0], success
// USE TUPLES!!!


// . even with perfect hashing function,
//   .. no unlimited memory => therefore will need keys at some time
//     ... can never avoid collisions


// . completely constant hashtable, hashing again at every bucket
//   .. therefore down to the hashing function
//   .. birthday problem => will have some collision
//     .. but unlikely more than 2/3 collisions
//     .. >75%, likely to have collisions mathematically, resize array
//       .. birthday problem

// . when resize array, have to rehash everything
//   .. since modulo will be wrong for new rehash, whether >75%(double) or <37.5%(half)
//   .. for dynamic arrays, not linked chains (which would screw up linkages)
//     ... worth having array['dog', 'puppy', Math.floor(index/modulo)]??? to rehash quickly?
//     ... cannot do that because halving the hash table would screw things up


// output of hashfunc 14
// %6                at index 2, ['dog','puppy', Math.floor(14/6]]
// say if doubled size to 12   at index (2*6)+2 => 14 => %12 => at index 2