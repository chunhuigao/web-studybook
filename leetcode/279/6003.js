var minimumTime = function (s) {
  const len = s.length
  let right = Array(len + 1).fill(0)

  // 从右到左枚举，并记录需要消耗的时间
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === '1') {
      right[i] = Math.min(right[i + 1] + 2, len - i)
    } else {
      right[i] = right[i + 1]
    }
  }
  console.log(right)
  let result = right[0]
  let next = 0
  for (let i = 0; i < len; i++) {
    if (s[i] === '1') {
      next = Math.min(next + 2, i + 1)
      result = Math.min(result, next + right[i + 1])
    }
  }

  return result
}

const aa = minimumTime('010110')
