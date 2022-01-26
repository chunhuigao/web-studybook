class UnionFind {
  constructor(n) {
    this.node = new Array(n).fill().map((item, idx) => idx)
  }
  // 查找当前元素所在的根节点
  find(x) {
    if (x === this.node[x]) {
      return x
    }
    return this.find(this.node[x])
  }
  // 合并x，y所处集合
  merge(x, y) {
    x = this.find(x)
    y = this.find(y)
    if (x === y) return
    this.node[x] = y
  }
}
