/*

107. 二叉树的层次遍历 II
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
*/ 

// 简要思路：BFS法。可以先做二叉树的层次遍历I， 就是把添加结果的方式从从数组末尾推入改成从数组头部推入

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  if(!root) return res 

  const queue = []

  queue.push(root)

  while(queue.length) {
      let n = queue.length

      res.unshift([])

      while(n--) {
          let q = queue.shift()
          res[0].push(q.val)
          if(q.left) queue.push(q.left)
          if(q.right) queue.push(q.right)
      }
  }

  return res
}; 

// DFS遍历法, 利用 depth 这个变量记录当前遍历节点的深度，再在相对应的 res 数组中推入节点的值

var levelOrderBottom = function(root) {
  const res = []
  dfs(root, 0, res)
  return res
};

var dfs = function(root, dep, res) {
  if(!root) return 

  if(dep == res.length) {
      res.unshift([])
  }

  res[res.length - dep - 1].push(root.val) // res.length-dep-1, -1 是为了减去刚刚 unshift 的空数组，在正确的位置插入结果

  dfs(root.left, dep+1, res)
  dfs(root.right, dep+1, res)
}
