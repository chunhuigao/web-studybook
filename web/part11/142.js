var detectCycle = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      fast = head
      while (fast != slow) {
        slow = slow.next
        fast = fast.next
      }
      return fast
    }
  }
  return null
}
