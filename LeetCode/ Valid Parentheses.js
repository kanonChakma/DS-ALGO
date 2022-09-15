var isValid = function(s){
    
  if(s.length%2!==0) return false;
  
 const stack =[]; 
  for(let i =0; i<s.length; i++){
      let c = s.charAt(i);
    switch(c){
       case "(":
       stack.push(")");
       break;
      
       case "{":
       stack.push("}");
       break;

       case "[":
       stack.push("]");
       break;

       default:
         if(c !== stack.pop()){
          return false;
         }    
      } 
  }
  
 return stack.length === 0;    
};


const usingClassStack=() => {
    /**
 * @param {string} s
 * @return {boolean}
 */

 class Stack {
    constructor(){
      this.items =[];
    }
      
    push(ele){
     this.items.push(ele);      
    }
   
    peek(){
       if(this.items.length<1) return false; 
       return this.items[this.items.length-1];
    }
   
    pop(){
       if(this.items.length === 0) return false; 
       this.items.pop() 
    }
   isEmpty(){
       return this.items.length === 0;
   }
}

var isValid = function(s) {
  
  let item = new Stack();
  
 for(let i =0; i<s.length; i++)
 {
    if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
        item.push(s[i]);
     }
    else if(s[i] == ")" ){
       let close = item.peek();
       
        if(close !== "(") {
           return false;
       }else{
           item.pop();
       }
    }
      else if(s[i] == "]" ){
       let close = item.peek();
       if(close !== "[") {
           return false;
       }else{
           item.pop();
       }
    } 
      else if(s[i] == "}" ){
       let close = item.peek();
       if(close !== "{" ) {
           return false;
       }else{
           item.pop();
       }
    } 
  }
  
if(item.isEmpty()) {
      return true;
  }else{
      return false;
  }
 }
  
  
}