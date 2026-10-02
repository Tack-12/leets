var largestAltitude = function (gain) {
  currAltitude = 0;
  max = 0;

  for (i = 0; i < gain.length; i++) {
    currAltitude += gain[i];
    if (max < currAltitude) {
      max = currAltitude;
    }
  }

  return max;
};

gains = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gains));
