/*
61. 旋转链表
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
https://leetcode-cn.com/problems/rotate-list/
*/



// 解法，链表形成闭环再断开


var rotateRight = function(head, k) {

  // 头为空，或者链表只有一个节点、移动位置 k = 0 都直接返回头节点
  if(head === null || head.next === null || k === 0) {
      return head
  }

  let n = 1  // 统计链表长度，默认为1
  let p = head
  
  while(p.next) { // 避免 p 为 null
      n++
      p = p.next
  }

  let add = n - k % n

  if(add === n) {
      return head
  }

  // 闭环
  p.next = head


  while(add--) {
      p = p.next
  }

  // 断开
  let newHead = p.next
  p.next = null

  return newHead
};