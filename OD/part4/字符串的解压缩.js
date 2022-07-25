function start(s) {
  let result = null;
  for (let i = 0; i < s.length; i++) {
    if (!(isDigit(s[i]) || isAlphabet(s[i]))) {
      result = '!error';
      break;
    }
  }
  if (result) {
    console.log(result);
  } else {
    let num = 0;
    result = '';
    let tag = true;
    for (let i = 0; i < s.length; i++) {
      if (isDigit(s[i])) {
        num = num * 10 + Number(s[i]);
      } else {
        if (num > 0 && num < 3) {
          tag = false;
          break;
        }
        if (num > 0 && s[i] === s[i + 1]) {
          tag = false;
          break;
        }
        const l = Math.max(1, num);
        result += s[i].repeat(l);
        num = 0;
      }
    }
    if (tag && num === 0) {
      console.log('result', result);
    } else {
      console.log('!error');
    }
  }

  function isDigit(s) {
    const c = s.charCodeAt() - '0'.charCodeAt();
    return c >= 0 && c <= 9;
  }
  function isAlphabet(s) {
    const c = s.charCodeAt() - 'a'.charCodeAt();
    return c >= 0 && c <= 25;
  }
}

const testList = ['4dff', '2dff', '4dddd', '4d@A', '4f5', '11a', '3b4f'];

testList.forEach((v) => {
  start(v);
});
