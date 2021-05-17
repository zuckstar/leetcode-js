/*
206. 反转链表
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
https://leetcode-cn.com/problems/reverse-linked-list/
*/ 

// 1 迭代法
var reverseList = function(head) {

  let preNode = null;

  while(head) {
      let next = head.next
      head.next = preNode
      preNode = head
      head = next
  }
  return preNode
};

// 2 递归法
var reverseList = function(head) {
  // 说明到了最后一个节点了，返回新的头节点    
  if(!head || !head.next) {
      return head
  }

  let newHead = reverseList(head.next) // 递归获得新的头节点

  head.next.next = head // 改变指针指向
  head.next = null

  return newHead  // 向上传递新的头节点
};
