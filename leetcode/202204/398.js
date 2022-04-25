var Solution = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const k = nums[i];
    if (map[k]) {
      map[k].push(i);
    } else {
      map[k] = [i];
    }
  }
  this.map = map;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const { map } = this;
  const list = map[target] || [];
  const len = list.length;
  const idx = Math.floor(Math.random() * len);
  return list[idx];
};
