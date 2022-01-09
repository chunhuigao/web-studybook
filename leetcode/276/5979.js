var earliestFullBloom = function (plantTime, growTime) {
  const len = plantTime.length
  let list = []
  let resutl = 0
  for (let i = 0; i < len; i++) {
    const x = plantTime[i]
    const y = growTime[i]
    list.push([y, x])
  }
  list.sort((a, b) => b[0] - a[0])

  // 开花期越长，越先种植；
  let day = list[0][1]
  // 花期
  let current = [day + list[0][0]]
  for (let i = 1; i < len; i++) {
    // 种植时间
    day += list[i][1]
    current.push(day + list[i][0])
  }
  const max = Math.max(...current)
  return max
}

var plantTime = [6, 6, 3, 1],
  growTime = [4, 15, 5, 9]
const aa = earliestFullBloom(plantTime, growTime)
console.log(aa)
