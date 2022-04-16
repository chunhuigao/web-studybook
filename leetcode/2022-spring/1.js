var giveGem = function (gem, operations) {
  const len = operations.length;
  for (let i = 0; i < len; i++) {
    const [s, e] = operations[i];
    const n1 = gem[s];
    gem[s] = Math.ceil(n1 / 2);
    gem[e] += Math.floor(n1 / 2);
  }
  const max = Math.max(...gem);
  const min = Math.min(...gem);
  return max - min;
};
