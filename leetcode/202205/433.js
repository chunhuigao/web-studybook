var minMutation = function (start, end, bank) {
  if (start == end) {
    return 0;
  }

  let record = new Set();

  let compareBank = function (gene, bank) {
    let res = [];

    for (let i = 0; i < bank.length; i++) {
      if (validTranslate(gene, bank[i]) == 1 && !record.has(bank[i])) {
        res.push(bank[i]);
      }
    }

    return res;
  };

  let step = 1;
  let T = compareBank(start, bank);
  record.add(start);

  while (T.length > 0) {
    let current = [];

    for (let i = 0; i < T.length; i++) {
      if (T[i] == end) {
        return step;
      }

      current = current.concat(compareBank(T[i], bank));
      record.add(T[i]);
    }

    T = current;
    step += 1;
  }

  return -1;
};

function validTranslate(gene1, gene2) {
  let weight = 0;

  for (let i = 0; i < 8; i++) {
    if (gene1[i] != gene2[i]) {
      weight += 1;
    }
  }

  return weight;
}
