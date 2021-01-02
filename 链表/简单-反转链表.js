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
  // head 为 null, 则直接返回 head
  // 若 head 指针为最后一个节点，则返回当前 head 作为结果（新链表的头指针）
  if(head == null || head.next == null) {
      return head;
  }

  let res = reverseList(head.next) // 寻找最后一个节点

  head.next.next = head // 让当前节点的下一个节点的 next 指向当前节点
  head.next = null // 让当前节点 next 指针指向 null (修复递归到头节点的时候，next 指针的指向)

  return res
};
