/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function (m, n) {
  this.m = m
  this.n = n
  this.total = m * n
  this.map = new Map()
}

/**
 * @return {number[]}
 */
Solution.prototype.flip = function (index) {
  const key = [8, 8, 4, 7, 7][index]
  this.total--
  const idx = this.map.get(key) || key
  this.map.set(key, this.map.get(this.total) || this.total)
  console.log('map', key, this.map)
  return [Math.floor(idx / this.n), idx % this.n]
}

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.total = this.m * this.n
  this.map.clear()
}

var obj = new Solution(3, 5)

for (let i = 0; i < 5; i++) {
  var param_1 = obj.flip(i)
  console.log(param_1)
}
