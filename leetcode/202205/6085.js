var maximumImportance = function (n, roads) {
  const len = roads.length;
  let map = {};
  for (let i = 0; i < len; i++) {
    const [a, b] = roads[i];
    map[a] = (map[a] || 0) + 1;
    map[b] = (map[b] || 0) + 1;
  }
  const list = Object.keys(map).map((k) => [k, map[k]]);
  list.sort((a, b) => b[1] - a[1]);
  let obj = new Map();

  for (let i = 0; i < list.length; i++) {
    const [k] = list[i];
    obj.set(k, n--);
  }
  let result = 0;
  for (let i = 0; i < len; i++) {
    const [a, b] = roads[i];

    result = result + obj.get(String(a)) + obj.get(String(b));
  }
  return result;
};
