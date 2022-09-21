//O(n + m) in the worst case scenario 
//swap all non zero element left side sequentially than rest of element fil with zero
var moveZeroes = function(nums) 
{  
   let pos=0;
   for(let i = 0; i<nums.length ; i++)
   {
     if(nums[i] !== 0) {
        nums[pos++] = nums[i]; 
      }   
   }
   
   if(pos<1) return nums;
 
   for(let j = pos; j<nums.length; j++){
      nums[j] = 0; 
   }
  
  return nums;
};


//O(n^2)
var moveZeroes = function(nums) 
{  
  for(let i =0; i<nums.length ; i++)
     {
       let item = nums[i];
       
       for(let j = i+1; j<nums.length; j++) {
          if(item === 0 && nums[j] !== 0){
              nums[i] = nums[j];
              nums[j] = item;
              break;
          }   
        }
     }
     
    return nums;
};

