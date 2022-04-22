var maxRotateFunction = function (nums) {
  let len = nums.length;
  let t = 0;
  let c = 0;
  for (let i = 0; i < len; i++) {
    t += nums[i] * i;
    c += nums[i];
  }
  let r = t;
  let retult = t;
  for (let i = 1; i < len; i++) {
    r = r + c - len * nums[len - i];

    retult = Math.max(r, retult);
  }
  return retult;

  return r;
};
