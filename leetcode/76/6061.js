var waysToBuyPensPencils = function (total, cost1, cost2) {
  const len = Math.floor(total / cost1);
  let rsult = 0;
  for (let i = 0; i <= len; i++) {
    const diff = total - cost1 * i;
    rsult += getCount(diff) + 1;
  }
  return rsult;
  function getCount(n) {
    if (n === 0) return 0;
    return Math.floor(n / cost2);
  }
};
