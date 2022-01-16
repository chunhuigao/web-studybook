var minMoves = function (target, maxDoubles) {
  if (maxDoubles === 0) return target - 1
  let result = 0
  while (target > 1) {
    if (target % 2 === 1) {
      result++
      target--
    } else {
      if (maxDoubles > 0) {
        target = target / 2
        result++
        maxDoubles--
      } else {
        return result + target - 1
      }
    }
  }
  return result
}
