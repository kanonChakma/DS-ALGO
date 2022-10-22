//How are duplicates removed from a given array?
//Time Complexity is O(n); 
const arr = [4, 5, 7 , 8, 9, 4];
 const value = [...new Set(arr)];
 console.log(value);

 //Time Complexity is O(n^2)
 const arr1 = [4, 5, 7 , 8, 9, 4];
 let removeArr =  arr1.filter((ele, index) => {
     return arr1.indexOf(ele) === index;
 })
 console.log(removeArr);



 