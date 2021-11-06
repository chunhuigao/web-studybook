var reverseString = function (s) {
  const len = s.length
  let left = 0
  let right = len - 1
  while (left < right) {
    const t = s[left]
    s[left] = s[right]
    s[right] = t
    left++
    right--
  }
  return s
}
