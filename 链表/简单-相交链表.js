/*
160. 相交链表
编写一个程序，找到两个单链表相交的起始节点。
https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
*/ 

/*
假设 链表 A 的非重合长度为 a ，链表B 的非重合长度为 b, 他们重合的部分长度为 c
设置双指针，分别遍历 A -> B， B -> A ，总能找到他们的相交点 C，因为
a + c + b + c = b + c + a + c
前面的长度 a + c + b = b + c + a 被抹平，他们最后一段的长度 c 前相遇

若两个链表没有交点
则 a + b = b + a 
指针会一起到达终点，即为 null 的节点
*/
var getIntersectionNode = function(headA, headB) {
  let p1 = headA
  let p2 = headB
  while(p1 != p2) {
      p1 = p1 == null ? headB : p1.next
      p2 = p2 == null ? headA : p2.next
  }
  return p1
};
