/*
142. 环形链表 II
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：

你是否可以使用 O(1) 空间解决此题？

https://leetcode-cn.com/problems/linked-list-cycle-ii/
*/ 

// 哈希/集合法，第一个重复的遍历的节点就是入环的第一个节点
var detectCycle = function(head) {
  let set = new WeakSet()

  while(head) {
      if(set.has(head)) {
          return head
      } else {
          set.add(head)
      }
      head = head.next
  }
  return null
};
// 双指针，快慢指针法 + 一个额外指针
// 先完成环形链表一，公式需要数学代数证明后再写代码
var detectCycle = function(head) {
  let slow = head
  let fast = head


  while(fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if(slow == fast) {
          let pre = head
          while(pre != slow) {
              slow = slow.next
              pre = pre.next
          }
          return pre
      }

  }

  return null
};
