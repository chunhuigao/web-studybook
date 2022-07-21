function start(arr, n) {
  const list = arr.split(',').map((v) => Number(v));
  list.sort((a, b) => a - b);
  let total = 0;
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    if (total + list[i] < Number(n)) {
      total += list[i];
      result++;
    } else {
      break;
    }
  }
  console.log(result);
}

const testList = [['5,10,2,11', '20']];
testList.forEach((v) => {
  const [s1, s2] = v;
  start(s1, s2);
});
