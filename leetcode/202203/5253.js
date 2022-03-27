var kthPalindrome = function (queries, intLength) {
  const max = Math.max(...queries);
  let start = Math.floor((intLength - 1) / 2);
  if (intLength === 1) {
    let list = [];
    for (let i = 0; i < queries.length; i++) {
      const idx = queries[i];
      list[i] = idx < 10 ? idx : -1;
    }
    return list;
  } else if (intLength === 2) {
    let list = [];
    for (let i = 0; i < queries.length; i++) {
      const idx = queries[i];
      list[i] = idx < 10 ? `${idx}${idx}` : -1;
    }
    return list;
  } else {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
      result[i] = help(queries[i]);
    }
    return result;
  }

  function help(n) {
    const s = String(n);
    if (s.length > start + 1) return -1;
    const list = Array(intLength).fill(0);
    list[0] = 1;
    list[intLength - 1] = 1;
    const last = String(n - 1);
    const l = last.length - 1;

    for (let i = l; i >= 0; i--) {
      let left = start - (l - i);
      let right = start + (l - i) + (intLength % 2 === 0 ? 1 : 0);
      if (left === right) {
        list[left] += Number(last[i]);
      } else {
        list[left] += Number(last[i]);
        list[right] += Number(last[i]);
      }
    }
    const string = list.join('');
    return string.length === intLength ? string : -1;
  }
};
