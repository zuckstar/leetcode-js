/*
21. 合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/ 


// 一：迭代法
// 时间复杂度：O(n+m) ，其中 n 和 m 分别为两个链表的长度。
var mergeTwoLists = function(l1, l2) {

  let pHead = new ListNode(-1)  // 建立一个空节点，空节点的 next 指针指向结果的链表头
  let pre = pHead  // 链表遍历指针，用来连接和遍历链表

  while(l1 && l2) {
      if(l1.val <= l2.val) {
          pre.next = l1
          l1 = l1.next
      } else {
          pre.next = l2
          l2 = l2.next
      }
      pre = pre.next
  }

  pre.next = l1 ? l1:l2  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  return pHead.next
};

// 递归法
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2
  if(!l2) return l1
  if(l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  } else {
      l2.next = mergeTwoLists(l2.next, l1)
      return l2
  }
};
