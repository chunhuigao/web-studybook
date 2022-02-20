var isOneBitCharacter = function (bits) {
  const len = bits.length
  if (bits[len - 1] === 1) return false
  let idx = 0
  while (idx < len - 1) {
    if (bits[idx] === 0) {
      idx += 1
    } else if (bits[idx] === 1) {
      idx += 2
    }
  }
  return idx === len - 1
}

var isOneBitCharacter = function (bits) {
  const len = bits.length
  if (bits[len - 1] === 1) return false
  let l = 0
  for (let i = len - 2; i >= 0; i--) {
    if (bits[i] === 1) {
      l++
    } else {
      break
    }
  }
  return l % 2 === 0
}
