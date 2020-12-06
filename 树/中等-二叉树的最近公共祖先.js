/*
236. 二叉树的最近公共祖先
https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/ 

// 此题建议配合二叉搜索树的最近公共祖先一起食用

// p,q两个节点最近的公共祖先是指，p,q两个节点分别存在于当前节点的左右子树上，即当前节点是p,q节点的最近的公共祖先
// 或者当前节点是p、q中的其中一个节点，p,q 中另外一个节点是当前节点的子节点也可以说当前节点是p,q节点的最近的公共祖先

var lowestCommonAncestor = function(root, p, q) {
  if(!root || root == p || root == q) return root

  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if(!left) return right
  if(!right) return left

  return root
};
