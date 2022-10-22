//How do you reverse an array in place?

const arr = [3,4,5,6,7,8,9];
let len = arr.length;
//time complexity is O(n)
for (let i = 0; i <= Math.floor(len/2); i++) {
    let num =arr[i]
    arr[i] =  arr[len-i-1];
    arr[len-i-1] = num; 
}
console.log(arr);

arr.reverse()
console.log(arr);

