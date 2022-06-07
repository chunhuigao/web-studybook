var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = piles.reduce((a, b) => a + b);
  let result = 1;
  while (left <= right) {
    const m = left + Math.floor((right - left) / 2);
    if (check(m)) {
      result = m;
      right = m - 1;
    } else {
      left = m + 1;
    }
  }
  return result;

  function check(m) {
    let count = 0;
    for (let i = 0; i < piles.length; i++) {
      count += Math.ceil(piles[i] / m);
    }
    return count <= h;
  }
};
