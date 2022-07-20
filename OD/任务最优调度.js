function taskSchedule(tasks, n) {
  const len = tasks.length;
  if (n === 0) return len;
  let list = Array(1000).fill(0);

  let max = 0;
  for (let i = 0; i < len; i++) {
    const idx = tasks[i];
    list[idx] += 1;
    max = Math.max(max, list[idx]);
  }

  list = list.filter((v) => v > 0);
  const maxNum = list.filter((v) => v === max);
  const t1 = (max - 1) * (n + 1) + maxNum.length;

  const result = Math.max(len, t1);
  console.log(result);
}

const testList = [['2,2,2,3', 2]];
testList.forEach((v) => {
  const [list, n] = v;
  taskSchedule(
    list.split(',').map((v) => Number(v)),
    n
  );
});
