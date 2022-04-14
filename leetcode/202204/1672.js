var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const a = accounts[i];
    const t = a.reduce((a, b) => a + b);
    max = Math.max(max, t);
  }
  return max;
};
