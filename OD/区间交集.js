var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let l = intervals.length;
  if (l < 1) return intervals;
  let result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < l; i++) {
    if (end < intervals[i][0]) {
      result.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    } else if (end >= intervals[i][0] && end < intervals[i][1]) {
      end = intervals[i][1];
    }
  }
  result.push([start, end]);
  console.log(result);
  return result;
};

function getCommon(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let list = [];
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][1] >= intervals[j][0]) {
        const min = Math.min(intervals[i][1], intervals[j][0]);
        const max = Math.max(intervals[i][1], intervals[j][0]);
        list.push([min, max]);
      } else {
        break;
      }
    }
  }
  return list;
}

function start(list) {
  const array = getCommon(list);
  merge(array);
}

const testList = [
  [
    [1, 4],
    [4, 5],
  ],
  [
    [0, 3],
    [1, 3],
    [3, 5],
    [3, 6],
  ],
  [
    [1, 3],
    [3, 5],
  ],
];

testList.forEach((v) => {
  const a = start(v);
});
