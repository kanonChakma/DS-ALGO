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