var matchReplacement = function (s, sub, mappings) {
  let map = {};
  for (let i = 0; i < mappings.length; i++) {
    map[mappings[i][0]] = map[mappings[i][0]] || {};
    map[mappings[i][0]][mappings[i][1]] = true;
  }
  for (let i = 0; i < s.length; i++) {
    let j;
    for (j = 0; j < sub.length; ) {
      if (s[i + j] == sub[j]) {
        j++;
      } else if (map[sub[j]]?.[s[i + j]]) {
        j++;
      } else {
        break;
      }
    }
    if (j == sub.length) return true;
  }
  return false;
};
