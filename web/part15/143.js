var reorderList = function (head) {
  if (head === null || head.next === null) return head
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  const result = new ListNode(-1)
  result.next = head
  let node1 = head
  let node2 = reverse(slow)
  let next1 = node1.next
  let next2 = node2.next
  while (node2.next) {
    node1.next = node2
    node2.next = next1
    node1 = next1
    node2 = next2
    next1 = next1 ? next1.next : null
    next2 = next2 ? next2.next : null
  }

  return result.next
  function reverse(node) {
    let pro = null
    let curr = node
    let next = node.next
    while (curr) {
      curr.next = pro
      pro = curr
      curr = next
      next = next ? next.next : null
    }
    return pro
  }
}
