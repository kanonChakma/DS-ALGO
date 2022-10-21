//How do you find the largest and smallest number in an unsorted integer array?
const arr = [4,5,1,40,10,33,2,70,89,45,677,10,9,8];

//time complexity is O(n)
const findNumber = (arr) => {
    let small = arr[0], large = arr[0];

    for (let i = 0; i < arr.length; i++) {

         if(arr[i]<small){
             small = arr[i];
         }

         if(arr[i]>large){
             large = arr[i];
         }
   }

   console.log(small, large);
}
findNumber(arr);