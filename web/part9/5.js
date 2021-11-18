/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return loop(lists)
  function loop(list) {
    const len = list.length
    if (len === 0) return null
    if (len === 1) return list[0]
    const mid = len >> 1
    let temp = []
    for (let i = 0; i < mid; i++) {
      temp.push(margeList(list[2 * i], list[2 * i + 1]))
    }
    if (len % 2 === 1) {
      temp.push(list[len - 1])
    }

    return loop(temp)
  }

  function margeList(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
      l1.next = margeList(l1.next, l2)
      return l1
    } else {
      l2.next = margeList(l1, l2.next)
      return l2
    }
  }
}
