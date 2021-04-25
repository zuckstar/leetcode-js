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

// 解法一：不改变 root 返回一棵新的镜像树
var mirrorTree = function(root) {
  const helper = (root) => {
      if(!root) return null
      let node = new TreeNode(root.val)

      node.left = helper(root.right)
      node.right = helper(root.left)

      return node
  }

  return helper(root)
};
// 解法二：直接在原树上进行翻转
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
