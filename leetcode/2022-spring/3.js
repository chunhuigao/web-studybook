var getNumber = function (root, ops) {
  const list = [];
  dfs(root);
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    const c = list[i];

    for (let j = ops.length - 1; j >= 0; j--) {
      const [t2, s2, e2] = ops[j];
      if (c >= s2 && c <= e2) {
        if (t2 === 1) {
          result++;
        }
        break;
      }
    }
  }
  return result;

  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    list.push(node.val);
    dfs(node.right);
  }
};
