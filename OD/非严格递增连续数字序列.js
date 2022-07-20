function longestList(s) {
  let result = 0;
  let l = 0;
  let after = null;
  for (let i = 1; i < s.length; i++) {
    if (isDigit(s[i]) && s[i] >= s[i - 1]) {
      l++;
    } else {
      l = 1;
    }
    result = Math.max(result, l);
  }
  console.log(result);
  function isDigit(s) {
    const n = s.charCodeAt() - '0'.charCodeAt();
    return n >= 0 && n <= 9;
  }
}

const testList = [
  'abc2234019A334bc',
  'aaaa44ko543j123j7345677781',
  'aaaaa34567778a44ko543j123j71',
  '345678a44ko543j123j7134567778aa',
];
testList.forEach((v) => {
  longestList(v);
});
