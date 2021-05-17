/*
82. 删除排序链表中的重复元素 II


存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。

输入：head = [1,1,1,2,3]
输出：[2,3]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if(!head) return null

  let p = new ListNode(-1)

  p.next = head;

  let preNode = p

  while(preNode.next && preNode.next.next) {
      if(preNode.next.val === preNode.next.next.val) {
          let value = preNode.next.val
          while(preNode.next && preNode.next.val == value) {
              preNode.next = preNode.next.next
          }
      } else {
          preNode = preNode.next
      }
  }

  return p.next
}; 