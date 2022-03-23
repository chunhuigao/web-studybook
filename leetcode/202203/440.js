var findKthNumber = function (n, k) {
  let count = 1;
  k--;
  while (k > 0) {
    const children = getChildren(count);
    if (children <= k) {
      k -= children;
      count++;
    } else {
      count = count * 10;
      k--;
    }
  }

  return count;

  function getChildren(c) {
    let child = 0;
    let left = c;
    let right = c;
    while (left <= n) {
      child += Math.min(right, n) - left + 1;
      left *= 10;
      right = right * 10 + 9;
    }
    return child;
  }
};
