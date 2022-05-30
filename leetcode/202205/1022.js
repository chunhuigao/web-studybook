var sumRootToLeaf = function (root) {
  let t = 0;
  dfs(root, '');
  return t;
  function dfs(node, s) {
    s += node.val;
    if (node.left === null && node.right === null) {
      t += parseInt(s, 2);
      return;
    }
    node.left && dfs(node.left, s);
    node.right && dfs(node.right, s);
  }
};
