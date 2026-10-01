var moveZeros = function (nums) {
  var left = 0;

  if (nums.length != 1) {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[i] = nums[left];
        nums[left] = nums[i];
        left++;
      }
    }
  }
  return nums;
};

console.log(moveZeros([0,1,0,3,12]));
