var countDistinct = function (nums, k, p) {
  const len = nums.length;
  let object = {};
  for (let i = 0; i < len; i++) {
    let count = 0;
    let key = '';
    for (let j = i; j < len; j++) {
      if (nums[j] % p === 0) count++;
      if (count <= k) {
        key += nums[j] + 200;
        object[key] = 1;
      } else {
        break;
      }
    }
  }
  return Object.keys(object).length;
};
