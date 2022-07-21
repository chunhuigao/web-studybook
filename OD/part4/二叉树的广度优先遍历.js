function start(s1, s2) {
  const len = s1.length;
  let level = [];
  bfs(len - 1, 0, len - 1, 0);
  const result = level.filter((v) => v).join('');
  console.log(result);
  function bfs(root, start, end, index) {
    if (start > end) return;
    let i = start;
    while (i < end && s2[i] !== s1[root]) i++;
    level[index] = s1[root];
    bfs(root - 1 - end + i, start, i - 1, 2 * index + 1);
    bfs(root - 1, i + 1, end, 2 * index + 2);
  }
}

const testList = [
  ['CBEFDA', 'CBAEDF'],
  ['2315764', '1234567'],
];
testList.forEach((v) => {
  const [s1, s2] = v;
  start(s1, s2);
});
