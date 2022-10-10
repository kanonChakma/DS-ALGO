class Node {
    constructor(value) {
       this.value = value;
       this.next = null;
    }
}
class LinkedList {

    constructor(value) {
        this.head = {
            value:value,
            next:null
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

    insert(index, value) {
        
        if(index>=this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        let parentNode = this.traverseToIndex(index-1);
        newNode.next = parentNode.next;
        parentNode.next = newNode;
        this.length++;
     }

    delete(index){
     const previousNode = this.traverseToIndex(index-1);
     const deleteNode = previousNode.next;
     previousNode.next = deleteNode.next; 
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
         }  
        return currentNode;
     }

    allElement() {
      const arr = [];
      let currentNode = this.head;
      while(currentNode !== null) {
          arr.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return arr;
    }
}

const newLinkList = new LinkedList(50);
newLinkList.append(60);
newLinkList.append(70);
newLinkList.append(80);
newLinkList.prepand(40);
newLinkList.prepand(20);
newLinkList.prepand(10);
newLinkList.insert(4, 30);
console.log(newLinkList.allElement());
newLinkList.delete(3);
console.log(newLinkList.allElement());