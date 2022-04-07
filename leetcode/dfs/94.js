var inorderTraversal = function (root) {
  const result = [];
  dep(root);
  return result;
  function dep(node) {
    if (node === null) return;
    dep(node.left);
    result.push(node.val);

    dep(node.right);
  }
};
