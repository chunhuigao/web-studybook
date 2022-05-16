var inorderSuccessor = function (root, p) {
  if (root === null) return null;
  if (root.val <= p.val) {
    return inorderSuccessor(root.right, p);
  }
  const next = inorderSuccessor(root.left, p);
  return next === null ? root : next;
};
