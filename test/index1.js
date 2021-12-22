class Heap {
  constructor() {
    this.list = [0] //数组，存放数据
    this.compare = typeof compare === 'function' ? compare : this.defaultCompare
  }
  defaultCompare(a, b) {
   return a < b
  } 
  isEmpty() {} //是否为空
  getSize() {} // 数组长度
  top() {} // 最大值
  pop() {} // 删除最大值
  push() {} //添加值
  left = (x) => 2 * x //根据当前节点下标获取节点左侧子节点下标
  right = (x) => 2 * x + 1
  parent = (x) => Math.floor(x / 2)
}
