var findSubstringInWraproundString = function (p) {
  const array = Array(26).fill(0);
  const len = p.length;
  if (len < 2) return len;
  let l = 1;
  let result = 1;
  array[p[0].charCodeAt() - 97] = 1;
  for (let i = 1; i < len; i++) {
    const s1 = p[i - 1];
    const s2 = p[i];
    const n = s2.charCodeAt() - s1.charCodeAt();
    if (n === 1 || (s1 === 'z' && s2 === 'a')) {
      l++;
    } else {
      l = 1;
    }
    const n1 = s2.charCodeAt() - 97;
    console.log(n1);
    if (l > array[n1]) {
      result += l - array[n1];
      array[n1] = l;
    }
  }
  return result;
  //console.log('result数据多少？', array);
  //console.log('result数据多少？', result);
};
