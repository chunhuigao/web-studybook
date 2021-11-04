var getIntersectionNode = function(headA, headB) {
  let node1 = headA;
  let node2 = headB;
  while(node1 !== node2){
      //如果二者不相同，两链表同时向前步进;
      node1 = node1 === null?headB:node1.next;
      node2 = node2 === null?headA:node2.next
  }
  //如果相同，返回链表
  return node1
  
};