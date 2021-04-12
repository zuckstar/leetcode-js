// 二叉树后序遍历
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/

// 建议和二叉树的 前、中、后序遍历结合起来一起学习

// 一：递归法
var postorderTraversal = function(root) {
  let res = []

  let helper = (root) => {
      if(!root) return
      helper(root.left)
      helper(root.right)
      res.push(root.val)
  }
  
  helper(root)
  
  return res
};


// 二：迭代法
 var postorderTraversal = function(root) {
  let res = []
  if(!root) return res

  let stack = []

  let node = root
  let pre = null

  while(stack.length || node) {
      while(node) {
          stack.push(node)
          node = node.left
      }

      node = stack.pop()

      if(!node.right || node.right == pre) {
          // 当前节点的右节点不存在，或者已经被遍历过，会二次经由根节点所以需要判断右节点是否已经被遍历过
          res.push(node.val)
          pre = node // 记下当前节点
          node = null
      } else {
          stack.push(node)
          node = node.right
      }

  }


  return res
};