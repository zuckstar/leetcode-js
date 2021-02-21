/*
108. 将有序数组转换为二叉搜索树
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

*/ 
// 首先理解平衡的二叉搜索树的概念，一个高度平衡二叉树是指一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。
// 搜索树的特性是左子树的值比根的值小，右子树的值比根的值大
// 题目提供的数组是有序数组，可以利用递归+二分查找的算法去构建一颗平衡二叉搜索树
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
  let helper = (start, end)=>{

      if(start > end) return null

      let mid = (start + end) >>> 1
      const root = new TreeNode(nums[mid])

      root.left = helper(start, mid-1)
      root.right = helper(mid + 1, end)

      return root
  }


  return helper(0, nums.length - 1)


};
