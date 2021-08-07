/*
129. 求根节点到叶节点数字之和
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。
https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
*/

// 回溯剪枝
var sumNumbers = function (root) {
  let res = []

  let path = []

  let dfs = (root) => {
    if (!root) return

    path.push(root.val)

    if (!root.left && !root.right) {
      res.push(path.join(''))
      path.pop()
      return
    }

    dfs(root.left)
    dfs(root.right)

    path.pop()
  }

  dfs(root)

  let sum = res.reduce((pre, cur) => {
    return Number(pre) + Number(cur)
  })

  return sum
}

// 优化：纯递归
var sumNumbers = function (root) {
  let dfs = (root, preSum) => {
    if (!root) return 0

    let sum = preSum * 10 + root.val
    if (!root.left && !root.right) {
      return sum
    }

    return dfs(root.left, sum) + dfs(root.right, sum)
  }

  return dfs(root, 0)
}
