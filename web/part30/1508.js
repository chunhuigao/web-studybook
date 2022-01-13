class Heap {
  constructor(fn) {
    this.list = [0]
    this.compose = typeof fn === 'function' ? fn : this.defaultFn
  }
  defaultFn(a, b) {
    return a < b
  }

  top() {
    return this.list[1]
  }
  left(x) {
    return 2 * x
  }
  right(x) {
    return 2 * x + 1
  }
  parent(x) {
    return x >> 1
  }
  isEmpty() {
    return this.list.length === 1
  }
  getSize() {
    return this.list.length - 1
  }
  push(value) {
    this.list.push(value)
    this.up(this.list.length - 1)
  }
  up(k) {
    const { compose, list, parent } = this
    const size = this.getSize()
    while (size > 1 && compose(list[k], list[parent(k)])) {
      this.wrap(k, parent(k))
      k = parent(k)
    }
  }
  pop() {
    const size = this.getSize()
    if (size === 0) return null
    this.wrap(1, this.list.length - 1)
    const top = this.list.pop()
    this.down(1)
    return top
  }
  down(k) {
    const size = this.getSize()
    const { left, right, compose, list } = this
    while (left(k) <= size) {
      let next = left(k)
      if (right(k) <= size && compose(list[right(k)], list[next])) {
        next = right(k)
      }
      if (compose(list[k], list[next])) return
      this.wrap(k, next)
      k = next
    }
  }
  wrap(x, y) {
    const t = this.list[x]
    this.list[x] = this.list[y]
    this.list[y] = t
  }
}

var rangeSum = function (nums, n, left, right) {
  const len = nums.length
  const list = nums.map((v, i) => [v, i])
  const minHead = new Heap((a, b) => a[0] < b[0])

  const result = []
  for (let i = 0; i < n; i++) {
    minHead.push(list[i])
  }
  while (!minHead.isEmpty()) {
    const [t, index] = minHead.pop()
    if (index < len - 1) {
      minHead.push([t + nums[index + 1], index + 1])
    }
    result.push(t)
    if (result.length === right) {
      const t = result.slice(left - 1, right).reduce((a, b) => a + b)
      return t % 1000000007
    }
  }
}
var nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 10
const aa = rangeSum(nums, n, left, right)
console.log(aa)
