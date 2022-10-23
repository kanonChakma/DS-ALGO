class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class linkedList {
    constructor(value){
      this.head = {
         value: value,
         next: null
      }
      this.tail = this.head;
      this.length = 1;
    }

    append(value) {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }

    prepand(value) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }

  delete(index) {
     let prevNode =  this.traverseIndex(index-1);
     let nextNode = prevNode.next;
      prevNode.next = nextNode.next;
    }

  insert(index, value) {
      if(index >= this.length) {
        return this.append(value);
      }

      let node = new Node(value);
      let prevNode = this.traverseIndex(index-1);
      node.next = prevNode.next;
      prevNode.next =  node;

      this.length++;
    }

  traverseIndex(index) {
      let counter = 0;
      let currentNode = this.head;

      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;     
      }
      return currentNode;
  }

  print() {
        let currentNode =  this.head;
        let value = [];
        while(currentNode !== null) {
           value.push(currentNode.value);
           currentNode = currentNode.next;
        }
      return value;
    }
}

const newList =  new linkedList(4);
newList.append(5);
newList.append(6);
newList.append(7);
newList.prepand(3);
newList.prepand(2);
newList.insert(1,10);
console.log(newList.print())
newList.delete(4);

console.log(newList.print())
// newList.append(7);
//console.log(newList.print())
//console.log(newList);