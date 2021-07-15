/*
24. 两两交换链表中的节点
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1：


输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100

https://leetcode-cn.com/problems/swap-nodes-in-pairs/
*/

// 解法一：迭代法
var swapPairs = function(head) {
  let newHead = new ListNode()
  newHead.next = head

  let temp = newHead

  while(temp.next && temp.next.next) {
      let node1 = temp.next
      let node2 = temp.next.next

      temp.next = node2
      node1.next = node2.next
      node2.next = node1

      temp = node1
  }

  return newHead.next
};

// 解法二：递归法

var swapPairs = function(head) {
  if(!head || !head.next) {
      return head
  }

  let nextNode = head.next

  head.next =  swapPairs(nextNode.next)

  nextNode.next = head

  return nextNode
};