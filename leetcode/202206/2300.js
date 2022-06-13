var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  let list = [];
  for (let i = 0; i < spells.length; i++) {
    const n = spells[i];
    const target = Math.ceil(success / n);
    list[i] = help(target);
  }
  return list;

  function help(n) {
    //  console.log('n', n);
    let left = 0;
    let right = potions.length;
    let t = potions.length;
    while (left <= right) {
      const m = left + Math.floor((right - left) / 2);
      if (potions[m] >= n) {
        right = m - 1;
        t = m;
      } else {
        left = m + 1;
      }
    }

    return potions.length - t;
  }
};
