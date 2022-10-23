//How do you find the middle element of a singly linked list in one pass?
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
class linkList {
    constructor(value) {
        this.head ={
           value: value,
           next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    printList() {
        let currentNode =  this.head;
        let items = [];
        while(currentNode !== null) {
            items.push(currentNode.value);
            currentNode =  currentNode.next;
        }
        return items;
    }
    prepand(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    findMiddleValue() {
        let counter = 0;
        let length = Math.floor(this.length/2);
        let currentNode = this.head;

        while(counter !== length) {
             currentNode = currentNode.next;
             counter++;
        }
        return  currentNode.value;
    }
}

const newLinkedList =  new linkList(10);
newLinkedList.prepand(9);
newLinkedList.prepand(8);
newLinkedList.prepand(7);
newLinkedList.prepand(6);
newLinkedList.prepand(5);
console.log(newLinkedList.printList());
console.log(newLinkedList.findMiddleValue());

