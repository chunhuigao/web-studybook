/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  // 排序
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)

  // 排序后，房子要么使用前一个供暖器，要么使用后一个供暖器

  // 供暖器数量
  const len = heaters.length
  let result = 0
  for (let i = 0; i < houses.length; i++) {
    // 第K间房子，根据房子找最近的灯
    const k = houses[i]
    let left = 0
    let right = len - 1

    while (left <= right) {
      const m = (left + right) >> 1
      if (heaters[m] === k) {
        left = m
        break
      }
      if (heaters[m] < k) {
        left = m + 1
      } else {
        right = m - 1
      }
    }
    console.log(left)
    if (heaters[left] === k) continue
    // 第一个，
    if (left === 0) {
      const after = Math.abs(heaters[left] - k)
      result = Math.max(result, after)
    } else if (left > len - 1) {
      const after = Math.abs(heaters[len - 1] - k)
      result = Math.max(result, after)
    } else {
      const after = Math.abs(heaters[left] - k)
      const next = Math.abs(heaters[left - 1] - k)
      result = Math.max(result, Math.min(after, next))
    }
  }
  return result
}
var houses = [1, 2, 3, 4],
  heaters = [1, 2, 4]
const aa = findRadius(houses, heaters)
console.log(aa)
