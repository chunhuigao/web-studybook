var countOdds = function (low, high) {
  let base = Math.floor((high - low) / 2);
  if (low % 2 === 1 || high % 2 === 1) {
    return base + 1;
  }
  return base;
};
