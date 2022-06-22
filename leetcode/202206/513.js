var findBottomLeftValue = function (root) {
  let list = [];
  dfs(root, 0);
  return list[list.length - 1];
  function dfs(node, level) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      if (list[level] === undefined) {
        list[level] = node.val;
      }
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
