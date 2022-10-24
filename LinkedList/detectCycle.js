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
    
    makeCycle(index) {
        
        let counter = 1;
        let temp = this.head;
        let startNode;

        while(temp.next !== null) {
            if(counter === index) {
              startNode = temp;
              console.log(startNode);
            }
            temp = temp.next;
            counter++;
         }

         temp.next = startNode;
    }
   
    //Floyd’s Cycle-Finding Algorithm: timecomplexity O(n) spaceComplexity O(1)
    detectCycleOne() {
      let slow = this.head;
      let fast = this.head;

      while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow){
            return true;
         }
       }

       return false;
    }

   //using hashMap  timecomplexity O(n) spaceComplexity O(n)
   detectCycleTwo() {
     let currentNode = this.head;
     let newSet = new Set();
     while(currentNode !== null) {
         if(newSet.has(currentNode)) {
           return true;
         }
         newSet.add(currentNode);
         currentNode = currentNode.next;
      }
     return false;
   } 
   
   removeCycle() {
      let fast = this.head;
      let slow = this.head;
     
      do {
       slow = slow.next;
       fast = fast.next.next;
     } while (slow !== fast);
    
     fast = this.head;
     while(fast.next !== slow.next) {
       fast = fast.next;
       slow = slow.next
     }

     slow.next = null;
   }

  cycleStartNode() {
     let set = new Set();
     let head = this.head;

     while(head !== null){
        if(set.has(head)){
          return head.value;
        }
        set.add(head);
        head = head.next;
     }
   }
}

const newLinkedList =  new linkList(10);

newLinkedList.prepand(9);
newLinkedList.prepand(8);
newLinkedList.prepand(7);
newLinkedList.prepand(6);
newLinkedList.prepand(5);
newLinkedList.prepand(4); 
console.log(newLinkedList.printList());
newLinkedList.makeCycle(3)
//console.log(newLinkedList.printList());
console.log(newLinkedList.detectCycleOne());
console.log(newLinkedList.cycleStartNode());
newLinkedList.removeCycle()
console.log(newLinkedList.detectCycleTwo());

