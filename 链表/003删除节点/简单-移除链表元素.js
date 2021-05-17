/*
203. 移除链表元素
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5

*/ 

var removeElements = function(head, val) {
  let preHead = new ListNode(-1) // 虚拟节点
  let p = preHead

  while(head) {
      if(head.val !== val) {
          p.next = head
          p = p.next
      }
      head = head.next
  }
  p.next = null // 修复最后一个元素的next指向
  return preHead.next
};
