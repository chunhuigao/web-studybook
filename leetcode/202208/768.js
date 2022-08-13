/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const len = arr.length;
  const left = [];
  left[0] = arr[0];

  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }
  const right = [];
  right[len - 1] = arr[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    right[i] = Math.min(right[i + 1], arr[i]);
  }
  let result = 0;
  for (let i = 1; i < len; i++) {
    if (left[i - 1] <= right[i]) result++;
  }
  return result + 1;
};
