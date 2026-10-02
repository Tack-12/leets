var uniqueOccurrences = function (arr) {
  let hashMap = new Map();
  let ArrValues = [];
  let Setvalues = new Set();
  let val = false;
  for (i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) {
      hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    } else {
      hashMap.set(arr[i], 1);
    }
  }
  console.log(hashMap);

  for (let [key, val] of hashMap) {
    ArrValues.push(val);
    Setvalues.add(val);
  }

  return ArrValues.length == [...Setvalues].length;
};

let check = uniqueOccurrences([1, 2, 2, 1, 1, 3]);
console.log(check);
