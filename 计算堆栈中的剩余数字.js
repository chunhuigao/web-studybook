function start(list) {
  const len = list.length;
  const stack = [];
  for (let i = 1, j = 0; i < len; i++) {
    let sum = 0;
    for (let k = j; k >= 0; k--) {
      sum += list[k];
      if (sum === list[k]) {
        list[k] = 2 * list[i];

        list[i] = 0;
        for (let m = k + 1; m <= j; m++) list[m] = 0;
        j = k + 1;
        sum = -Infinity;
        break;
      }
      if (sum > list[i]) break;
    }
    if (sum !== -Infinity) {
      list[j] = list[i];
      list[i] = 0;
      j++;
    }
  }
  console.log(list);
  for (let i = len - 1; i > 0; i--) {
    if (list[i] != 0) {
      console.log(list[i]);
    }
  }
}

const testList = ['5 10 20 50 85 1'];
testList.forEach((v) => {
  start(v.split(' ').map((v) => Number(v)));
});
