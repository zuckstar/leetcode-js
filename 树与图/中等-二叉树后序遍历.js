// 二叉树后序遍历
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/

// 建议和二叉树的 前、中、后序遍历结合起来一起学习

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
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
