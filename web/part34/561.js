var arrayPairSum = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let l = nums.length
  let total = 0
  for (let i = 0; i < l; i = i + 2) {
    total = total + nums[i]
  }
  return total
}
