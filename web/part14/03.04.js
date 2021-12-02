class MyQueue {
  constructor() {
    this.left = []
    this.right = []
  }
  push(x) {
    this.left.push(x)
  }
  pop() {
    while (this.left.length) this.right.push(this.left.pop())
    const result = this.right.pop()
    while (this.right.length) this.left.push(this.right.pop())
    return result
  }
  peek() {
    return this.left[0]
  }
  empty() {
    return !this.left.length
  }
}
