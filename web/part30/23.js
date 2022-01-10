var mergeKLists = function (lists) {
  const len = lists.length
  if (len === 0) return null
  if (len === 1) return lists[0]
  let start = lists[0]
  for (let i = 1; i < len; i++) {
    const curr = lists[i]
    start = mergeTwoListNode(start, curr)
  }
  return start

  function mergeTwoListNode(l1, l2) {
    if (l1 === null) return l2
    if (l2 == null) return l1
    if (l1.val < l2.val) {
      l1.next = mergeTwoListNode(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoListNode(l1, l2.next)
      return l2
    }
  }
}

var mergeKLists = function (lists) {
  const len = lists.length
  if (len === 0) return null

  while (lists.length > 1) {
    const p1 = lists.pop() || null
    const p2 = lists.pop() || null
    const node = mergeList(p1, p2)
    lists.unshift(node)
  }

  return lists[0]

  // 合并两个链表
  function mergeList(node1, node2) {
    if (node1 === null) return node2
    if (node2 === null) return node1
    if (node1.val < node2.val) {
      node1.next = mergeList(node1.next, node2)
      return node1
    } else {
      node2.next = mergeList(node2.next, node1)
      return node2
    }
  }
}
