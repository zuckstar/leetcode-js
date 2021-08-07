/*
199. 二叉树的右视图
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

https://leetcode-cn.com/problems/binary-tree-right-side-view/
*/

// 思路：二叉树层序遍历，取每一层的最后一个节点
// 精华点：用 size 记录当前层的节点个数，保证不越界的同时可以获取到当前的最后一个节点
var rightSideView = function (root) {
  let res = []

  if (!root) return res

  let queue = [root]

  while (queue.length) {
    let size = queue.length

    for (let i = 1; i <= size; i++) {
      let p = queue.shift()
      if (p.left) queue.push(p.left)
      if (p.right) queue.push(p.right)
      if (i == size) {
        res.push(p.val)
      }
    }
  }

  return res
}
