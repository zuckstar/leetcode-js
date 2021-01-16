/*
剑指 Offer 35. 复杂链表的复制
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
*/ 


// 解法一：三步走，先拷贝节点再分离
var copyRandomList = function(head) {
  if(!head) return null       // 边界条件  head 不存在返回 null
  
  let pHead = head

  // 第一步：拷贝节点
  while(pHead) {
      let copyNode = new Node(pHead.val, pHead.next, null)
      pHead.next = copyNode
      pHead = pHead.next.next
  } 

  // 第二步：复制random指针
  pHead = head

  while(pHead) {
      if(pHead.random) // 边界条件  random 为 null
          pHead.next.random = pHead.random.next
      pHead = pHead.next.next
  }

  // 第三步：分离链表
  pHead = head
  let resHead = head.next 

  while(pHead && pHead.next) { // 边界条件  pHead.next == null
      let tmp = pHead.next
      pHead.next = tmp.next
      pHead = tmp
  }

  return resHead
};


// 解法二：哈希表映射法
var copyRandomList = function(head) {
  if(!head) return null

  let map = new Map()

  let p = head

  while(p) {
      map.set(p, new Node(p.val))
      p = p.next
  }


  p = head

  while(p) {
      map.get(p).next = p.next ? map.get(p.next) : null
      map.get(p).random = p.random ? map.get(p.random) : null
      p = p.next
  }

  return map.get(head)
};
