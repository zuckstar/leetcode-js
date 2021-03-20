/*
剑指 Offer 33. 二叉搜索树的后序遍历序列
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000

https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
*/ 

// 思路：二叉树后续遍历的顺序为 左、右、根，同时二叉搜索树的特性是 左子节点小于根节点，右子节点大于根节点，利用这一性质，把序列利用递归的形式进行遍历判断，如果最终符合要求则认为该序列是二叉搜索树的后序遍历序列。

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
  const helper = (left, right) => {
      if(left >= right) return true
      let p = left, m
      let root = postorder[right]

      while(postorder[p] < root) {
          p++
      }

      m = p
      
      while(postorder[p] > root) {
          p++
      }

      return p === right && helper(left, m - 1) && helper(m, right - 1)
  }

  return helper(0, postorder.length - 1)
};
