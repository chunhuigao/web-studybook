function sortByAchievement(ids, ach) {
  let map = {};
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    if (map[id]) {
      map[id].push(ach[i]);
    } else {
      map[id] = [ach[i]];
    }
  }
  let list = [];
  Object.keys(map).forEach((k) => {
    const array = map[k];
    if (array.length >= 3) {
      array.sort((a, b) => b - a);
      array.length = 3;
      const t = array.reduce((a, b) => a + b);
      list.push([t, k]);
    }
  });
  list.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return b[0] - a[0];
    }
  });
  const result = list.map((v) => v[1]).join('');
  console.log('result', result);
}

const testList = [
  ['3,3,7,4,4,4,4,7,7,3,5,5,5', '53,80,68,24,39,76,66,16,100,55,53,80,55'],
];
testList.forEach((v) => {
  const [h, w] = v;

  sortByAchievement(stringToArray(h), stringToArray(w));
  function stringToArray(s) {
    return s.split(',').map((v) => Number(v));
  }
});
