/**
 * @ Author: Your name
 * @ Create Time: 2021-11-02 21:16:24
 * @ Modified by: Your name
 * @ Modified time: 2021-11-02 21:24:47
 * @ Description:数组转链表
 */

function NodeList(val) {
  this.val = val
  this.next = null
}

function arrayToNodeList(list) {
  let header = new NodeList(0)
  let current = header
  for (let i = 0; i < list.length; i++) {
    current.next = { val: list[i], next: null }
    current = current.next
  }
  return header.next
}

function nodeListToArray(node) {
  const list = []
  let header = node
  while (header) {
    list.push(header.val)
    header = header.next
  }
  return list
}
const array = [1, 3, 5]
const ary2 = [2, 4, 6]
const list1 = arrayToNodeList(array)
const list2 = arrayToNodeList(ary2)
console.log(list1, list2)
const aa = nodeListToArray(list1)
console.log(aa)
