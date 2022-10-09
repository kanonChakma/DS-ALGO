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
       const newNode = {
           value: value,
           next: null
       }
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
    }
    prepand(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    allElement() {
      const arr = [];
      let currentNode = this.head;
      while(currentNode !== null){
          arr.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return arr;
    }
}

const newLinkList = new LinkedList(10);
newLinkList.append(20);
newLinkList.append(49);
newLinkList.prepand(40);
newLinkList.prepand(35);
console.log(newLinkList.allElement());