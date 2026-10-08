var maxArea = function (height) {
  leftValue = 0;
  rightValue = height.length;
  maxArea = 0;

  while (leftValue != rightValue) {
    currWidth = rightValue - leftValue;
    currHeight = Math.min(height[leftValue], height[rightValue]);
    currArea = currHeight * currWidth;

    if (currArea > maxArea) {
      maxArea = currArea;
    }

    if (currHeight === height[leftValue]) {
      leftValue++;
    } else {
      rightValue--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
