function start(arr, id) {
  const map = {};
  const tags = {};
  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i].split(' ');
    tags[a] = true;
    tags[b] = true;
    if (map[b]) {
      map[b].push(a);
    } else {
      map[b] = [a];
    }
  }

  dfs(id);
  function dfs(id) {
    tags[id] = false;
    const array = map[id] || [];
    for (let i = 0; i < array.length; i++) {
      const k = array[i];
      tags[k] = false;
      dfs(k);
    }
  }
  let result = [];
  Object.keys(tags).forEach((k) => {
    if (k !== '0' && tags[k]) {
      result.push(Number(k));
    }
  });
  console.log(result.sort((a, b) => a - b).join(' '));
}

const testList = [[['8 6', '10 8', '6 0', '20 8', '2 6'], '8']];
testList.forEach((v) => {
  const [s1, s2] = v;
  start(s1, s2);
});
