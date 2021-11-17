var swapNodes = function (head, k) {
  const header = new ListNode(-1)
  header.next = head
  let fast = header
  while (k--) {
    fast = fast.next
  }
  let current = fast
  let slow = header
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  const t = current.val
  current.val = slow.val
  slow.val = t
  return head
}
