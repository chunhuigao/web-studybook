var largestCombination = function (candidates) {
  const list = Array(24).fill(0);
  candidates.forEach((n) => {
    let idx = 0;
    while (n) {
      if (n % 2 === 1) {
        list[idx] += 1;
      }
      n = n >> 1;
      idx++;
    }
  });
  return Math.max(...list);
};
