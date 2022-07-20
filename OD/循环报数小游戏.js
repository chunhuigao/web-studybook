function deletegame(m) {
  const list = Array(100)
    .fill(0)
    .map((v, i) => i + 1);

  let index = 0;
  while (list.length >= m) {
    index = (index + m - 1) % list.length;
    list.splice(index, 1);
  }
  console.log(list.join(','));
}

const testList = [3, 4];
testList.forEach((v) => {
  deletegame(v);
});
