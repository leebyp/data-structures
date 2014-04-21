var assert = chai.assert;

describe("binarySearchTreeR with Resizing", function() {
  var binarySearchTreeR;

  beforeEach(function() {
    binarySearchTreeR = makeBinarySearchTreeR(5);
  });

  xit("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTreeR.insert).to.be.a('function');
    expect(binarySearchTreeR.contains).to.be.a('function');
    expect(binarySearchTreeR.depthFirstLog).to.be.a('function');
  });

  xit("should insert values at the correct location in the tree", function(){
    binarySearchTreeR.insert(2);
    binarySearchTreeR.insert(3);
    binarySearchTreeR.insert(7);
    binarySearchTreeR.insert(6);
    expect(binarySearchTreeR.left.right.value).to.equal(3);
    expect(binarySearchTreeR.right.left.value).to.equal(6);
  });

  xit("should have a working 'contains' method", function(){
    binarySearchTreeR.insert(2);
    binarySearchTreeR.insert(3);
    binarySearchTreeR.insert(7);
    assert.isTrue(binarySearchTreeR.contains(7));
    assert.isFalse(binarySearchTreeR.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTreeR.insert(2);
    binarySearchTreeR.insert(3);
    binarySearchTreeR.insert(8);
    binarySearchTreeR.insert(6);
    binarySearchTreeR.insert(1);
    binarySearchTreeR.insert(4);
    console.log(binarySearchTreeR)
    binarySearchTreeR.depthFirstLog(func);
    expect(JSON.stringify(array)).to.equal(JSON.stringify([5,2,1,3,4,8,6]))
  });

  xit("should execute a callback on every value in a tree using 'breadthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTreeR.insert(2);
    binarySearchTreeR.insert(3);
    binarySearchTreeR.insert(8);
    binarySearchTreeR.insert(6);
    binarySearchTreeR.breadthFirstLog(func);
    expect(JSON.stringify(array)).to.equal(JSON.stringify([5,2,8,3,6]))
  });
});
