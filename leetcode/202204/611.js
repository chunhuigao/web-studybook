var triangleNumber = function (nums) {
  let result = 0;
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let k = i;
    for (let j = i + 1; j < nums.length; j++) {
      while (k + 1 < len && nums[k + 1] < nums[i] + nums[j]) {
        k++;
      }
      result += Math.max(k - j, 0);
    }
  }
  return result;
  console.log(result);
};
