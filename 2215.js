var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  arr1 = set1.difference(set2);
  arr2 = set2.difference(set1);

  let final = [];
  final.push([...arr1]);
  final.push([...arr2]);

  return final;
};

n1 = [1, 2, 3];
n2 = [2, 4, 6];

let newArr = findDifference(n1, n2);
console.log(newArr);
