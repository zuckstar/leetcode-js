/*
面试题 02.04. 分割链表
编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。

示例:

输入: head = 3->5->8->5->10->2->1, x = 5
输出: 3->1->2->10->5->5->8

https://leetcode-cn.com/problems/partition-list-lcci/

*/ 
// 解法：双指针法，用两个指针保存两个链表的头部，
// 其中一个链表保存小于 x 值的节点
// 另外一个链表保存大于等于 x 值的节点
// 最后将这两个链表连接即可
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(!head || !head.next) return head

  let leftHead = new ListNode(-1)
  let rightHead = new ListNode(-1)

  let left = leftHead
  let right = rightHead

  while(head) {
      let next = head.next

      if(head.val < x) {
          left.next = head
          left = left.next
      } else {
          right.next = head
          right = right.next
      }
      head.next = null
      head = next
  }
  // 连接链表
  left.next = rightHead.next

  return leftHead.next
};
