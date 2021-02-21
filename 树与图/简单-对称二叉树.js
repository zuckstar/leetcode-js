/*

101. 对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

*/ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


//  递归解法：思路来源于【相同的树】这道题，在【简单的树】解题的基础上进行一定的修改即可。
//  本质上是把一棵二叉树的左右节点当成两棵树来做比较
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null) return true
  return isSymmetricFunc(root.left, root.right)
};
var isSymmetricFunc = function(left, right){
  if(left == null && right == null) return true
  if(left == null || right == null) return false
  if(left.val !== right.val) return false
  return isSymmetricFunc(left.left, right.right) && isSymmetricFunc(left.right, right.left)
}
// 迭代解法: 思路其实和递归差不多，不同就是树的值先用队列保存起来，逐一拿出来作对比，注意，此时队列中的值如果有相邻的两个值为 null, 不能直接返回true，因为可能该队列还剩余其他节点还没作对比，必须把队列清空了才算结束
var isSymmetric = function(root) {
  if(root === null) return true
  let queue = []
  queue.push(root.left, root.right)
  while(queue.length != 0) {
      let q1 = queue.shift()
      let q2 = queue.shift()

      if(q1 == null && q2 == null) continue
      if(q1 == null || q2 == null || q1.val !== q2.val) return false

      queue.push(q1.left, q2.right, q1.right, q2.left)
  }
  return true
};
