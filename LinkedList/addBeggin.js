class LinkedList {

    constructor(value) {
        this.head = {
          value :value,
          next: null
        }

        this.tail = this.head;
        this.length =1;
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
}
 
const newLink =  new LinkedList(20);
newLink.prepand(30);
newLink.prepand(40);
console.log(newLink);