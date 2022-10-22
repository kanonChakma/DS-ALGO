//How do you find all pairs of an integer array whose sum is equal to a given number?
let  arr= [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
let sum = 11;

const findAllPair1 = (arr, sum) => {
  let map = new Map();
  let count = 0; 
  
for (let i = 0; i < arr.length; i++) {
      
      let num = sum - arr[i];
      if(map.has(num)) {
          count += map.get(num);
      }

      if(map.has(arr[i])) {
         map.set(arr[i], map.get(arr[i]) + 1)
      }else{
         map.set(arr[i], 1);
      }
   }
   console.log(count);
   console.log(map);
}

findAllPair1(arr, sum);


//--Time Complexity is O(n^2)
const findAllPair = (arr, sum) => {
  let pair= [];
  for (let i = 0; i < arr.length; i++) {
     for (let j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j] === sum) {
            pair.push([arr[i], arr[j]])
        } 
     } 
  }
  return pair;
}

//console.log(findAllPair(arr, sum));














