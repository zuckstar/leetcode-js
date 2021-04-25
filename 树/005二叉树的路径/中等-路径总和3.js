/*
437. 路径总和 III
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11

https://leetcode-cn.com/problems/path-sum-iii/
*/ 
// （前缀和+递归+回溯）
var pathSum = function(root, targetSum) {
    let res = 0

    let map = new Map()

    const dfs = (presum, root) => {
        if(!root) return 

        // 前缀和为 presum 的总数 +1
        map.set(presum, (map.get(presum) || 0) + 1)

        // 计算当前 target 值
        let target = presum + root.val

        // 计算 target - targetSum 的前缀总数有几个
        res += map.get(target - targetSum) || 0
        
        // 继续递归
        dfs(target, root.left)
        dfs(target, root.right)

        // 递归结束，回溯前总数 - 1 
        map.set(presum, map.get(presum) - 1)
    }

    dfs(0, root)

    return res
};