/*
141. 环形链表
给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

 

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

https://leetcode-cn.com/problems/linked-list-cycle/
*/ 


// 一：快慢指针法
var hasCycle = function(head) {

  if(!head || !head.next) {  // 容错
      return false
  }
  let slow = head
  let fast = head.next  // fast 指针的起始指针不一定要在 slow 的后两个，只要起始位置不同即可，fast 指针步长为2
  // slow 指针步长为 1

  while(fast && fast.next) {
      if(slow === fast) return true
      slow = slow.next
      fast = fast.next.next
  }
  return false
};

// 二：Set/Map 集合法

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
var hasCycle = function(head) {
  let wkset = new WeakSet() // WeakSet 专门用来存储对象的集合
 
  while(head) {
      if(wkset.has(head)){  // 若对象已经存在于集合之中则说明该链表是环形链表
          return true
      } else {
          wkset.add(head)
      }
      head = head.next

  }
  return false
};
