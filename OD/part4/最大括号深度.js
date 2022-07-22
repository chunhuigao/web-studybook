function start(s) {
  const len = s.length;
  let sign = true;
  const list = [];
  let count = 0;
  let result = 0;
  for (let i = 0; i < len; i++) {
    const c = s[i];

    if (c === '(' || c === '{' || c === '[') {
      list.push(c);
      count = 0;
    } else {
      const l = list.length - 1;
      const t = list[l];
      if (
        (c === ')' && t === '(') ||
        (c === ']' && t === '[') ||
        (c === '}' && t === '{')
      ) {
        list.pop();
        count += 1;
      } else {
        sign = false;
        break;
      }
    }
    result = Math.max(result, count);
  }
  if (sign) {
    console.log(result);
  } else {
    console.log(0);
  }
}

const testList = ['[]', '([]{()})', '(]', '((())){([()])}'];
testList.forEach((v) => {
  start(v);
});
