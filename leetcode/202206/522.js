/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const len = strs.length;
  let map = {};
  if (len === 1) return strs[0];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      if (check(i, j)) {
        map[strs[i]] = (map[strs[i]] || 0) + 1;
        // map[strs[j]] = ( map[strs[j]]  || 0) + 1;
      }
    }
  }
  // console.log('map',map)
  let max = -1;
  for (let i = 0; i < len; i++) {
    if (!map[strs[i]]) {
      max = Math.max(max, strs[i].length);
    }
  }
  return max;

  function check(i, j) {
    let x = 0;
    let y = 0;
    while (x < strs[i].length && y < strs[j].length) {
      if (strs[i][x] === strs[j][y]) {
        x++;
      }
      y++;
    }
    return x === strs[i].length;
  }
};
