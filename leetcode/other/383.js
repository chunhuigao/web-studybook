var addTwoNumbers = function (l1, l2) {
  let root = new ListNode(-1)
  let list = root
  let sign = 0 //进位变量
  while (l1 || l2 || sign) {
    //保证l1.val有值
    if (!l1) {
      l1 = new ListNode(0)
    }
    //保证l2.val有值
    if (!l2) {
      l2 = new ListNode(0)
    }
    let n = l1.val + l2.val + sign
    if (n >= 10) {
      sign = 1
      n = n - 10
    } else {
      sign = 0
    }
    list.next = new ListNode(n)
    l1 = l1.next
    l2 = l2.next
    list = list.next
  }
  return root.next
}
