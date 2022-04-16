var perfectMenu = function (materials, cookbooks, attribute, limit) {
  const len = attribute.length;
  for (let i = 0; i < len; i++) {
    attribute[i][2] = i;
  }

  attribute.sort((a, b) => a[1] - b[1]);
  let max = -1;
  dfs(0, 0, []);
  return max;

  function dfs(t, idx, path) {
    if (idx > len) return;
    if (t >= limit) {
      let temp = Array(5).fill(0);
      let current = 0;
      for (let i = 0; i < path.length; i++) {
        const index = path[i][2];

        temp = add(temp, cookbooks[index]);

        current += path[i][0];
      }

      if (diff(temp, materials)) {
        max = Math.max(max, current);
      }
    }
    for (let i = idx; i < len; i++) {
      path.push(attribute[i]);
      dfs(t + attribute[i][1], i + 1, path);
      path.pop();
    }
  }
  function add(a, b) {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list[i] = Number(a[i]) + Number(b[i]);
    }
    return list;
  }
  function diff(a, b) {
    for (let i = 0; i < 5; i++) {
      if (a[i] > b[i]) return false;
    }
    return true;
  }
};
