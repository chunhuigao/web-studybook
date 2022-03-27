var minDeletion = function (nums) {
  const len = nums.length;
  if (len === 1) return 1;

  let d = 0;
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] == nums[i - 1]) {
      d++;
    } else {
      i--;
    }
  }
  return (len - d) % 2 === 0 ? d : d + 1;
};
