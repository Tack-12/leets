var findMaxAverage = function (nums, k) {
  let curr = 0;

  for (i = 0; i < k; i++) {
    curr += nums[i];
  }
  console.log(curr);
  let maxAvg = curr / k;
  for (i = k; i < nums.length; i++) {
    curr += nums[i];
    curr -= nums[i - k];

    let avg = curr / k;
    maxAvg = Math.max(maxAvg, avg);
  }

  return parseFloat(maxAvg);
};

let x = [5];
max = findMaxAverage(x, 1);
console.log(max);
