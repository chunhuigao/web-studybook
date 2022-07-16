function start(list) {
  const len = list.length;

  if (len === 1) {
    console.log(list[0]);
  } else {
    let stack = [];
    stack[0] = list[0];
    for (let i = 1; i < len; i++) {
      stack = helper(stack, list[i]);
    }
    console.log(stack.reverse().join(' '));
  }

  function helper(stack, current) {
    let sum = 0;
    for (let j = stack.length - 1; j >= 0; j--) {
      sum += stack[j];
      if (sum === current) {
        const c = current * 2;
        stack.splice(j, stack.length - j);

        if (stack.length) {
          helper(stack, c);
        } else {
          stack.push(c);
        }
        return stack;
      }
    }
    stack.push(current);
    return stack;
  }
}

const testList = ['5 10 20 50 85 1', '6 1 2 3', '20 6 1 2 3 2'];
testList.forEach((v) => {
  start(v.split(' ').map((v) => Number(v)));
});
