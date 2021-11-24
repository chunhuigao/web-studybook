//反转链表 II
var reverseBetween = function (head, left, right) {
  if (head === null) return null
  if (left === right) return head

  const header = new ListNode(-1)
  header.next = head
  let after = null
  let start = header
  for (let i = 0; i < left; i++) {
    start = start.next
    after = after ? after.next : header
  }

  let next = head
  for (let i = 0; i < right; i++) {
    next = next.next
  }

  const current = reverce(start, right - left + 1)
  after.next = current
  start.next = next
  function reverce(node, len) {
    let pre = null
    let current = node
    let next = node.next
    while (len--) {
      current.next = pre
      pre = current
      current = next
      next = next ? next.next : null
    }
    return pre
  }

  return header.next
}
