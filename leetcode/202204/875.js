var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  const len = piles.length;
  let result = right;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }
  return result;

  function check(m) {
    let t = 0;
    for (let i = 0; i < len; i++) {
      const n = Math.ceil(piles[i] / m);
      t += n;
    }
    return t > h;
  }
};
