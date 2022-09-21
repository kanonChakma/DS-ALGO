
var rotate = function(nums, k) {
    if(nums.length<2) return nums;
    let arr = new Array(nums.length);
    let len = nums.length;

    for(let i = 0; i<nums.length; i++){
      let sum = i+k;
      if(sum < len) {
        arr[sum] = nums[i];  
      }else{
          arr[sum-len] = nums[i];
      }
    }
    for(let i = 0; i<nums.length; i++){
      nums[i] = arr[i];
    }

};