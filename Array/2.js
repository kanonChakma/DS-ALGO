//How do you find the duplicate number on a given integer array?
const arr = [4,5,6,7,8,9,4,5];

//---time complexity in O(nlogn);---
const findDuplicate = (arr) => {
  arr.sort((a, b) => a-b);
} 

//time complexity is O(n)
const findDuplicate1 = (arr) => {
    let i =1;
   const duplicate = {};
   arr.forEach(ele => {
       if(duplicate[ele] === undefined) {
           duplicate[ele] = i;
           i++;
       }else{
           console.log(ele);
       }
   });
}
findDuplicate1(arr);
