/*
二叉树的中序遍历：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
*/ 

// 一：递归法
var inorderTraversal = function(root) {
  let res = []

  inorder(root, res)

  return res    
};

var inorder = function (root, res) {
  if(!root) return
  inorder(root.left, res)
  res.push(root.val)
  inorder(root.right, res)
}

// 二：迭代法
var inorderTraversal = function(root) {
  const res = []

  if(!root) return res

  let stack = []
  let node = root 

  while(stack.length || node) {
      while(node) {
          stack.push(node)
          node = node.left
      }
      node = stack.pop()
      res.push(node.val)

      node = node.right
  }

  return res
};