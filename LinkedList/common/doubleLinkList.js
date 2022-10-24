class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkList {
  constructor(value) {
      this.head = {
          value:value,
          next:null,
          prev:null
      }
      this.tail = this.head;
      this.length = 1;
  }

  appen(value) {
      let newNode = new Node(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  }

  prepan(value) {
    let newNode =  new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    let newNode = new Node(value);
    let preNode = this.indexTraverse(index-1);
    let follower = preNode.next;
     
    preNode.next = newNode;
    newNode.next = follower;
    newNode.prev = preNode;
    follower.prev = newNode;
    this.length++;
  }

  indexTraverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  printElement(){
      let currentNode = this.head;
      let arr = [];
      while(currentNode !==  null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return arr;
  }
}

const newLinkList = new DoubleLinkList(10);
newLinkList.appen(23);
newLinkList.appen(24);
newLinkList.appen(25);
console.log(newLinkList.printElement());
newLinkList.insert(1,56);
// newLinkList.prepan(23);
// newLinkList.prepan(24);
// newLinkList.prepan(25);
console.log(newLinkList);
console.log(newLinkList.printElement());

