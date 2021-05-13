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

var isPalindrome = function(head) {

  let res = []
  
  let p = head

  while(p) {
      res.push(p.val)
      p = p.next
  }

  let re_res = res.slice().reverse()

  if(re_res.join('') === res.join('')) {
      return true
  }

  return false

};

/**
 * 2. 利用快慢指针，快指针到结尾时，慢走到链表中部并反转前半部分，最后比较反转后的前半部分链表和后半部分链表，建议先完成【反转链表】这道题
 * 整个流程可以分为以下五个步骤：
 * 找到前半部分链表的尾节点。
 * 反转后半部分链表。
 * 判断是否回文。
 * 恢复链表。
 * 返回结果。
 * 
 * 需要的主要方法：
 * （1）反转链表
 * （2）查找链表中间节点
 * */

 var isPalindrome = function(head) {
    
  const reverseList = (head) => {
      let pre = null
      let p = head

      while(p) {
          let next = p.next
          p.next = pre
          pre = p
          p = next
      }

      return pre
  }

  const findMidNode = (head) => {
      
      if(!head) return null;

      let slow = head
      let fast = head

      while(fast.next && fast.next.next) { // 偶数个节点情况下，保证 slow 在前边
          fast = fast.next.next
          slow = slow.next
      }

      return slow
  }


  if(!head) return true // 注意头部为空的情况
  
  let frontEnd = findMidNode(head)

  let backStart = reverseList(frontEnd.next)

  let p1 = head
  let p2 = backStart

  let res = true

  while(p1 && p2) { // 比较链表
      if(p1.val !== p2.val) {
          res = false  
          break;      
      }
      p1 = p1.next
      p2 = p2.next
  }

  frontEnd.next = reverseList(backStart)  // 还原链表

  return res

};


// 不需要恢复链表，只翻转的算法

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

