var diStringMatch = function (s) {
  const len = s.length;
  let start = 0;
  let end = len;
  const list = [];
  for (let i = 0; i < len; i++) {
    if (s[i] === 'I') {
      list[i] = start;
      start++;
    } else {
      list[i] = end;
      end--;
    }
  }
  //console.log('111',start,end)
  list.push(end);
  return list;
};
