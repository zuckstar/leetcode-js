/*
226. 翻转二叉树
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

https://leetcode-cn.com/problems/invert-binary-tree/
*/ 

// 此题即剑指offer中的镜像二叉树，利用递归算法，先从叶子节点开始交换左右节点，直至交换根节点的左右节点

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null) {
      return null
  }

  let left = invertTree(root.left)
  let right = invertTree(root.right)

  root.left = right 
  root.right = left
  
  return root
};
