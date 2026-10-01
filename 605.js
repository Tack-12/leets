var canPlaceFlowers = function (flowerbed, n) {
  var count = n;

  for (i = 0; i < flowerbed.length; i++) {
    currVal = flowerbed[i];
    if (currVal == 1) continue;

    if (currVal == 0) {
      var leftCheck = flowerbed[i - 1] == 0 || i == 0;
      var rightCheck = flowerbed[i + 1] == 0 || i == flowerbed.length - 1;
    }

    if (leftCheck && rightCheck) {
      count--;
      flowerbed[i] = 1;
    }

    if (count <= 0) {
      return true;
    }
  }

  return count <= 0;
};

function main() {
  flowerbed = [1, 0, 0, 0, 1];
  var isTrue = canPlaceFlowers(flowerbed, 2);

  console.log(isTrue);
}

main();
