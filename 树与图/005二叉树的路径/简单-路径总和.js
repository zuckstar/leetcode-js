/*
112. 路径总和
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

https://leetcode-cn.com/problems/path-sum/

*/ 

// 代码非常精简，但是不一定能一次性写正确，需要多次尝试，先尝试写出代码，再进行代码优化

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root) return false

  if(!root.left && !root.right) {
     return root.val === sum // 这里进行了剪枝，如果叶子节点 root.val != sum 也就没必要再递归下去了 
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val) 
};

