class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
   constructor(value) {
       this.head = {
           value : value,
           next: null
       }
       this.tail = this.head;
       this.length = 1;
   }

   append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
   }
                                                                                                                                                                                           
   prepand(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
   }

  reverse() {       
    let currentNode = this.head;
    while(currentNode !== null) {
      
    }

  }

  printAll() {
      let arr = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return arr;
  }
}

const newLinkList = new LinkedList(10);
newLinkList.append(20);
newLinkList.prepand(9);
newLinkList.prepand(8);                                                                  
newLinkList.reverse();
console.log(newLinkList);

