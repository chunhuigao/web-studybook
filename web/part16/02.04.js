var partition = function (head, x) {
  let l1 = new ListNode(-1)
  let l2 = new ListNode(-1)
  let start = l1
  let end = l2
  while (head) {
    const next = head.next

    if (head.val < x) {
      ;(start || {}).next = head
      start = start.next
      start.next = null
    } else {
      end.next = head
      end = end.next
      end.next = null
    }
    head = next
  }
  start.next = l2.next
  return l1.next
}
