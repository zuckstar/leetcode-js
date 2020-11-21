// 144. 二叉树的前序遍历
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
   let res = []

   let helper = (root)=> {
       if(!root) return

       res.push(root.val)

       helper(root.left)
       helper(root.right)
   }
   helper(root, res)
   return res
};
