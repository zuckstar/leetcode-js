/*
111. 二叉树的最小深度
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。


示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000

https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
*/ 


// 深度遍历
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0

  if(!root.left && !root.right) {
      return 1
  }

  let depth = Number.MAX_SAFE_INTEGER

  if(root.left) {
      depth = Math.min(minDepth(root.left), depth)
  }
  if(root.right) {
      depth = Math.min(minDepth(root.right), depth)
  }

  return depth + 1

};

// 层序遍历: 思路类似二叉树的层次遍历，首先按层遍历，当前节点如果是叶子节点则返回深度
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0

  let queue = [root]
  let depth = 0

  while(queue.length) {
  
      let levelsize = queue.length
      
      depth++

      while(levelsize--) {
          let q = queue.shift()
          if(!q.left && !q.right) return depth
          q.left && queue.push(q.left)
          q.right && queue.push(q.right)
      }
  }

  return depth

};
