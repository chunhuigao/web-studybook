//K 个一组翻转链表

var reverseKGroup = function (head, k) {
  let header = new ListNode(0)
  header.next = head
  let node = head

  // 获取整个链表长度
  let len = 0
  while (node) {
    len++
    node = node.next
  }

  //再次遍历链表

  //上一节点
  let pre = header

  // 当前节点
  let current = header.next

  // 下一节点
  let next = null

  while (len >= k) {
    //反转0-k之间的链表
    for (let i = 0; i < k - 1; i++) {
      // 下一节点等于当前节点的下一节点；
      next = current.next
      // 将开始节点的下一节点指向下一节点的下一节点
      current.next = next.next
      next.next = pre.next
      pre.next = next
    }
    pre = current
    current = pre.next
    len -= k
  }

  return header.next
}
