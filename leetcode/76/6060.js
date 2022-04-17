var findClosestNumber = function (nums) {
  const len = nums.length;
  let list = [];
  for (let i = 0; i < len; i++) {
    list[i] = [nums[i], Math.abs(nums[i])];
  }
  //console.log('list',list)
  list.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  return list[0][0];
};
