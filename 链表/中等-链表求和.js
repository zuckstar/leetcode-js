/*
面试题 02.05. 链表求和
给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。

 

示例：

输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

示例：

输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912

https://leetcode-cn.com/problems/sum-lists-lcci/

*/ 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let head = new ListNode(-1)
  let p = head

  let carry = 0

  while(l1 || l2 || carry) {

      let val = ( l1 ? l1.val : 0 ) + ( l2 ? l2.val : 0) + carry
      let num = val % 10
      carry = Math.trunc(val / 10)

      p.next = new ListNode(num)

      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
      p = p.next
  }

  return head.next

};
