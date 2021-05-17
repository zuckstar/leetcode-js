/*
剑指 Offer 06. 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。


示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 

限制：

0 <= 链表长度 <= 10000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

// 这里最好不要用数组的 unshift 方法，而是用 push 方法添加元素，然后再用 reverse 方法反转数组
// 因为 unshift 方法非常损耗性能，效率低


var reversePrint = function(head) {
  let res = []
  while(head) {
      res.push(head.val)
      head = head.next
  }
  return res.reverse()
};
