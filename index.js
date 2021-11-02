const list1 = JSON.parse(readline()||"[]")
const list2 = JSON.parse(readline()||"[]")
 console.log('',list1,list2)
let node1 = arrayToNodeList(list1)
let node2 = arrayToNodeList(list2)

const result = []
while (node1 || node2) {
 
  if (node1 && node2) {
    if (node1.val > node2.val) {
      result.push(node2.val)
      node2 = node2.next
    } else {
      result.push(node1.val);
      node1 = node1.next
    }
  }else{
     if(node1){
        result.push(node1.val);
        node1 = node1.next
      }
      if(node2){
        result.push(node2.val);
        node2 = node2.next
      }
  }
 
}

const res = arrayToNodeList(result) 
console.log('1111',res,result)
// 链表构造函数
function NodeList(val) {
  this.val = val
  this.next = null
}

//数组转链表
function arrayToNodeList(list) {
  let header = new NodeList(0)
  let current = header
  for (let i = 0; i < list.length; i++) {
    current.next = { val: list[i], next: null }
    current = current.next
  }
  return header.next
}

// 链表转数组
function nodeListToArray(node) {
  const list = []
  let header = node
  while (header) {
    list.push(header.val)
    header = header.next
  }
  return list
}
