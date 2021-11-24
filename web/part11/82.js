var deleteDuplicates = function (head) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let fast = dummy.next
  let slow = dummy
  while (fast) {
    if (fast.next && fast.val === fast.next.val) {
      let sameVal = fast.val
      while (fast && sameVal === fast.val) {
        fast = fast.next
      }
    } else {
      slow.next = fast
      slow = fast
      fast = fast.next
    }
  }
  slow.next = fast
  return dummy.next
}
