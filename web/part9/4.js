var swapPairs = function (head) {
  if (head === null) return head
  // 三指针，pre current next;
  let header = new ListNode(-1)
  header.next = head
  let pre = header
  while (pre && pre.next && pre.next.next) {
    const current = pre.next
    const next = pre.next.next
    current.next = next.next
    next.next = current
    pre.next = next
    pre = current
  }
  return header.next
}
