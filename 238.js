//Not Complete need to be checked again.

var productExceptSelf = function (nums) {
  var prefix = 1;
  var newArr = [1];
  for (i = 1; i < nums.length; i++) {
    newArr.push(newArr[i - 1]);
    prefix *= newArr[i];
  }
  postfix = 1;

  for (i = nums.length - 1; i >= 0; i--) {
    newArr.push(newArr[i] * postfix);
    postfix = newArr[i];
  }

  console.log(newArr);
};

nums = [1, 2, 3, 4];
newNums = productExceptSelf(nums);

console.log(newNums);
