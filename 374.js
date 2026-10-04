function guess(num) {
  if (num > 6) return -1;
  if (num < 6) return 1;
  if (num == 0) return 0;
}

var guessNumber = function (n) {
  let initial = 1;
  let final = n;
  while (initial > final) {
    let midpoint = (initial + final) / 2;
    if (guess(midpoint) < 0) {
      initial = midpoint + 1;
    }
    if (guess(midpoint) > 0) {
      final = midpoint;
    } else {
      return midpoint;
    }
  }
};
