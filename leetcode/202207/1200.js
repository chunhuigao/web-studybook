var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let start = arr[0];
  let min = 1000000;
  let obj = {};

  for (let i = 1; i < arr.length; i++) {
    const n = Math.abs(arr[i] - start);
    min = Math.min(min, n);
    if (obj[n]) {
      obj[n].push([start, arr[i]]);
    } else {
      obj[n] = [[start, arr[i]]];
    }
    start = arr[i];
  }
  return obj[min];
};
