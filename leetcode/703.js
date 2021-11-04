var KthLargest = function (k, nums) {
  nums.sort((a, b) => b - a)
  this.list = nums
  this.idx = k
}
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

  return this.list[idx - 1]
}

var KthLargest = function (k, nums) {
  nums.sort((a, b) => b - a)
  // 仅仅截取前K个数字
  this.list = nums.slice(0, k + 1)
  this.idx = k
}

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

  //超出K个元素，删除数组中最后一个
  if (this.list.length === idx) {
    this.list = this.list.slice(0, idx)
  }

  return this.list[idx - 1]
}
