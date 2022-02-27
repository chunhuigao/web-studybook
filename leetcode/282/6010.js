var minimumTime = function (time, totalTrips) {
  const len = time.length
  const min = Math.min(...time)
  let left = 1
  let right = totalTrips * min

  while (left < right) {
    const m = left + Math.floor((right - left) / 2)

    if (check(m)) {
      right = m
    } else {
      left = m + 1
    }
  }
  return left
  function check(m) {
    let t = 0
    for (let i = 0; i < len; i++) {
      t += Math.floor(m / time[i])
    }
    return t >= totalTrips
  }
}
