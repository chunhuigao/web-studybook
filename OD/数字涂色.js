function numColor(list) {
  list.sort((a, b) => a - b);
  const tags = Array(list.length).fill(0);
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    if (tags[i] > 0) {
      continue;
    } else {
      for (let j = i; j < list.length; j++) {
        if (list[j] % list[i] === 0) {
          tags[j] += 1;
        }
      }
      result++;
    }
  }
  console.log('result', result);
}

const testList = ['2 4 6', '2 3 4 9'];
testList.forEach((v) => {
  numColor(v.split(' ').map((v) => Number(v)));
});
