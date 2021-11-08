var reversePrint = function (head) {
  // 用数据存储答案
  const result = []
  while (head) {
    // 将当前值放在数组头部
    result.unshift(head.val)
    head = head.next
  }
  // 返回数组
  return result
}
