var expect = chai.expect;
var assert = chai.assert;

describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    assert.isTrue('value' in tree);
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should return true for a value that the tree contains", function(){
    tree.addChild(5);
    assert.isTrue(tree.contains(5));
  });

  it("should return false for a value that was not added", function(){
    tree.addChild(5);
    assert.isFalse(tree.contains(6));
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should correctly detect nested children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    assert.isTrue(tree.contains(7));
    assert.isTrue(tree.contains(8));
  });

  it("should correctly return parent of child", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(10);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(11);
    expect(tree.children[2].children[0].parent.value).to.equal(10);
    expect(tree.children[1].children[0].parent.value).to.equal(6);
    expect(tree.children[0].parent.value).to.equal(undefined);
  });

  it("should correctly detach child tree, and return false for removed value", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(10);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(11);
    tree.children[2].children[0].removeFromParent();
    assert.isTrue(tree.contains(10));
    assert.isFalse(tree.children[2].contains(11));
  });

  it("traverses the tree and invokes a function on every node", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(10);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(11);
    var array = [];
    tree.traverse(function(node){
      array.push(node.value);
    });
    expect(JSON.stringify(array.sort())).to.equal(JSON.stringify([10,11,5,6,7,8, undefined]));
  });

});
