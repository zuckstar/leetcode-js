/*
面试题 04.03. 特定深度节点链表
给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。
*/


// 思路：先进行二叉树的按层遍历，再把每层的二叉树节点用链表连接起来。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
 var listOfDepth = function(tree) {
  if(!tree) return []

  let listNodeArray = []

  let res = []

  let queue = [tree]

  let left = 1

  while(queue.length) {
      let temp = []
      let next = 0
      while(left--) {
          let node = queue.shift()
          temp.push(node.val)

          if(node.left) {
              queue.push(node.left)
              next++
          }
          if(node.right) {
              queue.push(node.right)
              next++
          }
      }

      left = next
      res.push(temp)
  }


  for(let i = 0; i < res.length; i++) {
      let ary = res[i]

      let node = new ListNode(-1)
      let p = node
      for(let j = 0; j < ary.length; j++) {
          let tmpNode = new ListNode(ary[j])
          p.next = tmpNode
          p = p.next
      }

      listNodeArray.push(node.next)
  }

  return listNodeArray
};