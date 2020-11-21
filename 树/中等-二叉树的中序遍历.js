/*
94. 二叉树的中序遍历
给定一个二叉树的根节点 root ，返回它的 中序 遍历。

https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
*/ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
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
