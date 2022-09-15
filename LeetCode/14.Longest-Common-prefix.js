//brute force check each element with first element
var longestCommonPrefix = function(arr) {
    let str ="",c=0;
  if(arr.length<1) return "";
  for(let i=0; i<arr[0].length; i++) 
   {
     for(let j= 1; j<arr.length; j++) 
      {
        if(arr[0][i] === arr[j][i]) {
            c++;
        } else {
           return str;
        }
      }
       if(c === arr.length-1){
         str+=arr[0][i];
         c=0;
        }
   } 
 return str;
}
//---------------------------


//First sort then compare first and last element
var longestCommonPrefix = function(arr) {
    let str="";
    
    if(arr.length<1) return "";
     arr.sort();
     for(let i=0; i<arr[0].length ;i++){
        
         if(arr[0][i] == arr[arr.length-1][i]){
             str+=arr[0][i];
         }
         else{
             return str; 
         }
      }
    return str;
};