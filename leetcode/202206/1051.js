var heightChecker = function (heights) {
  let arr = [].concat(heights);
  heights.sort((a, b) => {
    return a - b;
  });
  // console.log(heights,arr)
  let l = heights.length;
  let index = 0;
  for (let i = 0; i < l; i++) {
    if (heights[i] != arr[i]) {
      index++;
    }
  }
  return index;
};
