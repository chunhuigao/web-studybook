function findFriend(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result[i] = findNext(i);
  }
  console.log('result', result);
  function findNext(idx) {
    for (let i = idx + 1; i < list.length; i++) {
      if (list[idx] < list[i]) return i;
    }
    return 0;
  }
}

const testList = [
  '100 95',
  '123 124 125 121 119 122 126 123',
  '20 10 50 30 40',
];
testList.forEach((v) => {
  findFriend(v.split(' ').map((v) => Number(v)));
});
