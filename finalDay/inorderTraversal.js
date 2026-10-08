result = [];
var inordertraversal = function (root) {
  if (root == null) {
    return [];
  }

  inordertraversal(root.left);
  result.append(root.val);
  inordertraversal(root.right);
  return result;
};
