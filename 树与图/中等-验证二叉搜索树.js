/*
98. 验证二叉搜索树
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
https://leetcode-cn.com/problems/validate-binary-search-tree/
*/ 

// 思路：中序遍历一颗二叉搜索树的结果是一个排序数组（从小到大）
// 对该二叉树进行中序遍历，当前节点的值必须大于上一节点遍历的值，则该树符合二叉搜索树的性质，继续遍历，直到结束，若不符合，则直接返回 false


var isValidBST = function(root) {

  let pre = -Infinity

  const dfs = function(node) {
      if(!node) return true

      if(!dfs(node.left)) return false

      if(node.val <= pre) return false
      pre = node.val

      return dfs(node.right)
  }
  return dfs(root)
};
