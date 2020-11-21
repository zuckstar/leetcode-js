/*
113. 路径总和 II
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

https://leetcode-cn.com/problems/path-sum-ii/
*/ 

// 基本思路： 递归 + 回溯
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const res = []

  const dfs = (root, path, total)=>{
      if(!root) return 

      path.push(root.val)
      total += root.val

      if(!root.left && !root.right) {
          if(total === sum) {
              res.push(path.slice()) // 注意！这个数组的 slice 拷贝！否则会添加数组的引用，最后的结果都为空数组
          }
      } else {

          dfs(root.left, total, path)
          dfs(root.right, total, path)
      }

      path.pop()
  }
  dfs(root, [], 0)
  return res
};
