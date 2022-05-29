var BookMyShow = function (n, m) {
  const list = [];
  for (let i = 0; i < n; i++) {
    list[i] = m;
  }
  this.list = list;
  this.m = m;
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function (k, maxRow) {
  for (let i = 0; i <= maxRow; i++) {
    const c = this.list[i];
    if (c >= k) {
      const t = this.m - this.list[i];
      this.list[i] -= k;
      return [i, t];
    }
  }

  return [];
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function (k, maxRow) {
  let t = k;
  for (let i = 0; i <= maxRow; i++) {
    const c = this.list[i];
    t = t - c;
    if (t <= 0) {
      for (let j = 0; j <= i; j++) {
        const c = this.list[j];
        if (k - c >= 0) {
          this.list[j] = 0;
          k -= c;
        } else {
          this.list[j] -= k;
        }
      }

      return true;
    }
  }
  return false;
};
