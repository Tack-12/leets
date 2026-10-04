let countBits = function (n) {
  let ans = [0];
  let offset = 1;

  for (i = 1; i <= n; i++) {
    if (offset * 2 == i) {
      offset = i;
    }
    ans[i] = 1 + ans[i - offset];
  }

  return ans;
};

console.log(countBits(5));
