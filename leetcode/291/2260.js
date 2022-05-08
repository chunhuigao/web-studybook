var minimumCardPickup = function (cards) {
  const len = cards.length;
  let left = 0;
  let right = len;
  let result = 0;
  while (left <= right) {
    const m = Math.floor((left + right) / 2);
    if (check(m)) {
      right = m - 1;
      result = m;
    } else {
      left = m + 1;
    }
  }

  return result === 0 ? -1 : result;

  function check(m) {
    const list = [];
    for (let i = 0; i < m; i++) {
      const k = cards[i];
      if (list[k]) return true;
      list[k] = 1;
    }

    for (let i = m; i < len; i++) {
      const k = cards[i];
      const idx = cards[i - m];
      list[idx] -= 1;
      if (list[k]) return true;
      list[k] = 1;
    }
    return false;
  }
};
