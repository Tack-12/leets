var twoSum = function (nums, target) {
  currValue = 0;
  newArr = [];
  secondValue = 0;

  while (secondValue < nums.length) {
    if (currValue == secondValue) {
      secondValue++;
      continue;
    }

    if (nums[currValue] + nums[secondValue] == target) {
      newArr.push(currValue);
      newArr.push(secondValue);

      return newArr;
    }
    if (secondValue == nums.length - 1) {
      secondValue = 0;
      currValue++;
      continue;
    }
    secondValue++;
  }

  return newArr;
};

console.log(twoSum([3, 2, 4], 6));
