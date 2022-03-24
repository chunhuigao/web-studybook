var shortestSubarray = function (nums, K) {
  const len = nums.length;
  const pre = Array(len+1).fill(0)

  for (let i = 0; i <len; i++) {
    pre[i + 1] = pre[i] + nums[i]
  }

  let queue = [];
  let min = len+1;


 
}

var nums = [84, -37, 32, 40, 95],
  k = 167
var aa = shortestSubarray(nums, k)
console.log(aa)
