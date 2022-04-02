/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const len = num.length;

  // 剩余数量
  const count = len - k;

  //单调递增
  let index = 0;
  const stack = [];
  while (index < len) {
    while (
      index < len &&
      (stack.length === 0 ||
        Number(stack[stack.length - 1]) <= Number(num[index]))
    ) {
      stack.push(num[index++]);
    }

    //处理边界
    if (index === len) break;

    //删除
    while (
      stack.length > 0 &&
      Number(stack[stack.length - 1]) > Number(num[index]) &&
      stack.length + len - index - 1 >= count
    ) {
      stack.pop();
    }
    stack.push(num[index++]);
  }
  //console.log('stack',stack)
  const list = stack.slice(0, count);
  while (list[0] === '0') list.shift();
  if (list.length === 0) return '0';
  return list.join('');
};
