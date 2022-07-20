function sortByHeightWeight(height, weight) {
  const len = height.length;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push([height[i], weight[i], i + 1]);
  }
  list.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      } else {
        return a[1] - b[1];
      }
    } else {
      return a[0] - b[0];
    }
  });
  const result = list.map((v) => v[2]).join('');
  console.log(result);
}

const testList = [
  ['100 100 120 130', '40 30 60 50'],
  ['90 110 90', '45 60 45'],
];
testList.forEach((v) => {
  const [h, w] = v;

  sortByHeightWeight(stringToArray(h), stringToArray(w));
  function stringToArray(s) {
    return s.split(' ').map((v) => Number(v));
  }
});
