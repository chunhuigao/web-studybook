var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let l = intervals.length
  if (l < 1) return intervals
  let result = []
  let start = intervals[0][0];
  let end = intervals[0][1]
  for (let i = 1; i < l; i++) {
    if (end < intervals[i][0]) {
      result.push([start, end])
      start = intervals[i][0];
      end = intervals[i][1]

    } else if (end >= intervals[i][0] && end < intervals[i][1]) {
      end = intervals[i][1]
    }

  }
  result.push([start, end])
  return result

};