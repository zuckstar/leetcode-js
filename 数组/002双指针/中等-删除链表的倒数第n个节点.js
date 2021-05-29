/*
19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
*/

// 利用双指针实现一次遍历


var removeNthFromEnd = function(head, n) {

  let preNode = new ListNode(-1)
  preNode.next = head

  let fast = preNode
  let slow = preNode
  let pre = null

  while(fast) {
      fast = fast.next

      if(n <= 0) {
          pre = slow
          slow=slow.next
      } else {
          n--
      }
  }

  pre.next = slow.next

  return preNode.next

};