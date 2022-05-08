var removeDigit = function (number, digit) {
  const len = number.length;
  let max = 0;
  let idx = 0;
  for (let i = 0; i < len; i++) {
    if (number[i] === digit) {
      idx = i;
      const n = number.substr(0, i);
      const c = number.substr(i + 1, len);
      if (i < len - 1 && number[i] < number[i + 1]) {
        return n + c;
      }
    }
  }

  return number.substr(0, idx) + number.substr(idx + 1, len);
};
