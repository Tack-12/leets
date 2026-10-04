let singleNumber = function (nums) {
  let def = 0;

  for (val of nums) {
    def = val ^ def;
  }
  return def;
};

console.log(singleNumber([2, 2, 1]));
