// 144. 二叉树的前序遍历
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 一、递归法
var preorderTraversal1 = function(root) {
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
// 二、迭代法，借助栈

var preorderTraversal2 = function(root) {
    
    const res = []
    if(!root) return res

    let stack = []

    let node = root

    while(stack.length || node) {
        while(node) {
            res.push(node.val)
            stack.push(node)
            node = node.left
        }

        node = stack.pop()
        node = node.right
    }

    
    return res
};