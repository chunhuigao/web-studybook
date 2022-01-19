var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let sx = 10
    let sy = 10
    while (sx <= a) {
      sx *= 10
    }
    while (sy <= b) {
      sy *= 10
    }
    //console.log(sx, sy, a, b, sx * b + a, sy * a + b);
    return sx * b + a - (sy * a + b)
  })
  if (nums[0] === 0) return '0'
  return nums.join('')
  //console.log('nums', nums);
}
