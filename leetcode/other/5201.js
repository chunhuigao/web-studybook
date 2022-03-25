/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  const len = plants.length
  let c = capacity
  let result = 0
  for (let i = 0; i < len; i++) {
    let current = plants[i]
    if (c >= current) {
      c -= current
      result += 1
    }
    if (i < len && c < plants[i + 1]) {
      // 回去提水
      result += 2 * (i + 1)
      c = capacity
    }
  }
  return result
}
var plants = [2, 2, 3, 3],
  capacity = 5
const aa = wateringPlants(plants, capacity)
console.log(aa)
