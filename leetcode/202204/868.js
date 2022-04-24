var binaryGap = function (N) {
  let arr = new Array(32);
  let index = 0;
  for (let i = 0; i < 32; i++) {
    if (((N >> i) & 1) != 0) {
      arr[index++] = i;
    }
  }
  let result = 0;
  for (let i = 0; i < index - 1; i++) {
    result = Math.max(result, arr[i + 1] - arr[i]);
  }
  return result;
};
