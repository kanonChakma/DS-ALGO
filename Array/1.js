//How do you find the missing number in a given integer array of 1 to 100?
let arr = [1,2,3,4,5,6,8,9,10];
let range = 10;
const findMissing = (num, arr) => {
   let sum =( num*(num+1))/2;
   for (let i = 0; i < arr.length; i++) {
       sum-=arr[i];
   }
   return sum;
}

console.log(findMissing(range, arr));