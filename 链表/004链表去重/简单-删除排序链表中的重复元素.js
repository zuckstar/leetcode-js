/*

  83. 删除排序链表中的重复元素
  给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

  示例 1:

  输入: 1->1->2
  输出: 1->2
  示例 2:

  输入: 1->1->2->3->3
  输出: 1->2->3

  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/submissions/

*/ 


var deleteDuplicates = function(head) {
  let current = head 

  while(current && current.next) {
      next = current.next
      if(current.val === next.val) {
          current.next = next.next // 如果当前元素重复，则 current 指针不动，current.next 指针移动
      } else {
          current = next
      }
      
  }
  return head
};
