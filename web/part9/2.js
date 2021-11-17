//哈希表

var copyRandomList = function (head) {
  let header = head
  const map = new Map()
  while (header) {
    map.set(header, new Node(header.val))
    header = header.next
  }
  header = head

  while (header) {
    const current = map.get(header)
    current.next = map.get(header.next) || null
    current.random = map.get(header.random) || null
    header = header.next
  }
  return map.get(head)
}

// 原链表修改法
var copyRandomList = function (head) {
  if (head === null) return
  let current = head

  //生成新的链表
  while (current) {
    const next = current.next
    current.next = new Node(current.val)
    current.next.next = next
    current = next
  }

  // 重新设置指针
  current = head
  while (current) {
    const next = current.next.next
    const newCurr = current.next
    newCurr.random = current.random !== null ? current.random.next : null
    current = next
  }

  let result = head.next
  current = head
  while (current) {
    const next = current.next.next
    const newCurr = current.next
    current.next = next
    newCurr.next = next !== null ? next.next : null
    current = next
  }
  return result
}
