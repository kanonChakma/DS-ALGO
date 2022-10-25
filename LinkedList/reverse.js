//https://careers.scandiweb.com/jobs/1352462-junior-trainee-react-developer-to-become-full-stack-developer
//How do you iterativeReverse a linked list?
//corner test case when list is empty Head wil be null;
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

  iterativeReverse() {       
    let currentNode = this.head;
    let prev = null,next = null;

     while(currentNode!== null) {
        next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
     } 

     this.head = prev;
  }
  recursivReverse(currentNode) {
    let nextNode;
    if(currentNode.next === null) {
        this.head = currentNode;
        return;
    }
    this.recursivReverse(currentNode.next);
    
    nextNode = currentNode.next;
    nextNode.next = currentNode;
    currentNode.next = null;
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

console.log(newLinkList.printAll());                                                                  
newLinkList.iterativeReverse();
console.log(newLinkList.printAll());

newLinkList.recursivReverse(newLinkList.head);
console.log(newLinkList.printAll());

