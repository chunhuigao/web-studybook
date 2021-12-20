/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  nums.sort((a, b) => b - a)
  this.list = nums.slice(0, k + 1)
  this.idx = k
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const idx = this.idx
  const len = this.list.length
  for (let i = 0; i < len; i++) {
    if (this.list[i] <= val) {
      this.list.splice(i, 0, val)
      break
    }
  }
  if (this.list.length === len) {
    this.list.push(val)
  }

  if (this.list.length === idx) {
    this.list = this.list.slice(0, idx)
  }

  return this.list[idx - 1]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
