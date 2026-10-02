var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }

    if (leftSum == rightSum) {
      return i;
    }
    leftSum = 0;
    rightSum = 0;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
