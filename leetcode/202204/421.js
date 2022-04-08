var levelOrder = function (root) {
  const result = [];
  dfs(root, 0);
  return result;
  function dfs(node, level) {
    if (node === null) return;
    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }
    if (node.children && node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i], level + 1);
      }
    }
  }
};
