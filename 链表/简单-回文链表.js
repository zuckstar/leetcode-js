/*
234. 回文链表
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

https://leetcode-cn.com/problems/palindrome-linked-list/

*/ 

// 1. 通过数组来解决，这种就不详细介绍了，通过遍历链表把值 push 到数组中，判断数组是否是回文数组即可，但是需要利用额外的空间来存储数组，空间复杂度为 O(n)，时间复杂度 O（n）

// 2. 利用快慢指针，快指针到结尾时，慢走到链表中部并反转前半部分，最后比较反转后的前半部分链表和后半部分链表，建议先完成【反转链表】这道题


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

  let slow = head
  let fast = head
  let pre = null

  // 边走边反转链表
  while(fast  && fast.next) {
      fast = fast.next.next  // 务必把移动快指针写在第一步，否则当部分链表反转之后，快指针再走就不是原来的链表的顺序了
      let next = slow.next
      slow.next = pre
      pre = slow
      slow = next

      
  }

  // 当链表长度为奇数的时候，跳过中间节点后开始比较
  if(fast) slow = slow.next

  while(slow && pre) {
      if(pre.val != slow.val) return false
      pre = pre.next
      slow = slow.next
  }
  return true


};

