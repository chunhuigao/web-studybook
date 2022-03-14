var canMakePaliQueries = function (s, queries) {
  const path = Array(26).fill(0);
  const list = [[...path]];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const idx = s[i].charCodeAt() - 'a'.charCodeAt();
    path[idx]++;
    list.push([...path]);
  }
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const [left, right, k] = queries[i];
    const l = list[left];
    const r = list[right + 1];
    let count = 0;
    for (let j = 0; j < 26; j++) {
      const t = r[j] - l[j];
      if (t % 2 === 1) count++;
    }

    result[i] = k >= (count - 1) / 2;
  }
  return result;
};
