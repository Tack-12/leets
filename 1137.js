var tribonacci = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }

  let arr = [0, 1, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1] + arr[i - 0]);
  }

  return arr[n];
};

console.log(tribonacci(4));
