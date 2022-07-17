var arrayNesting = function (nums) {
  let ans = 0,
    n = nums.length;
  const vis = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    let cnt = 0;
    while (!vis[i]) {
      vis[i] = true;
      i = nums[i];
      ++cnt;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
};
