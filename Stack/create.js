class Stack {
    constructor()
    {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if(this.items.length == 0)
         return "underflow";
       return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
}

var stack = new Stack();
stack.push(23);
stack.push(34);
stack.pop();
stack.isEmpty();


