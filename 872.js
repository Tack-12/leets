let leafSimilar = function (root1, root2) {
  let checkRoot = function (root, arr) {
    if (!root) {
      return;
    }

    if (!root.left && !root.right) {
      arr.push(root.val);
    }
    checkRoot(root.left, arr);
    checkRoot(root.right, arr);
  };

  const arr1 = [];
  const arr2 = [];

  checkRoot(root1, arr1);
  checkRoot(root2, arr2);
  return JSON.stringify(arr1) == JSON.stringify(arr2);
};
