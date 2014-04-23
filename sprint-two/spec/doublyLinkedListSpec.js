var expect = chai.expect;
var assert = chai.assert;

describe("doublyLinkedList", function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = makeDoublyLinkedList();
  });

  it("should have a head and tail", function() {
    expect(doublyLinkedList).to.have.property('head')
    expect(doublyLinkedList).to.have.property('tail')
  });

  it("should have methods named 'addToHead', 'addToTail', 'removeHead', 'removeTail' and 'contains'", function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it("should designate a new head when new nodes are added", function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    console.log(doublyLinkedList)
    doublyLinkedList.removeHead();
        console.log(doublyLinkedList)
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should remove the tail from the list when removeTail is called", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    console.log(doublyLinkedList)
    doublyLinkedList.removeTail();
        console.log(doublyLinkedList)
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it("should contain a value that was added", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    assert.isTrue(doublyLinkedList.contains(4));
    assert.isTrue(doublyLinkedList.contains(5));
    assert.isFalse(doublyLinkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    assert.isFalse(doublyLinkedList.contains(4));
  });

  // add more tests here to test the functionality of doublyLinkedList
});
