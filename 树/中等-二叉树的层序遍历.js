/*
102. 二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

*/ 

// 思路：关键点在于利用队列的先进先出的特性，让树的子节点按层输出，
// 需要一个变量 n 来记录每层节点的数量，防止把下一层的节点加入到当前的结果。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  const res = []
  if(!root) return res

  const queue = []
  queue.push(root)

  while(queue.length) {
      let n = queue.length
      res.push([])
      while(n--) {
          let q = queue.shift()
          res[res.length-1].push(q.val)

          if(q.left) queue.push(q.left)
          if(q.right) queue.push(q.right)
      }
  }
  return res
};
