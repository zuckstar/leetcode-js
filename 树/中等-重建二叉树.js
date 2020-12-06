/*

剑指 Offer 07. 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。


https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/ 


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length == 0 || inorder.length == 0) return null

  let rootVal = preorder[0]
  let node = new TreeNode(rootVal)

  let i = inorder.findIndex(item => item === rootVal)

  node.left = buildTree(preorder.slice(1, 1+i), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(1+i), inorder.slice(i+1))

  return node
};

// 用 Map 数据结构来优化每次寻找根节点的 O(n)算法，利用递归中下标传递优化 slice 函数
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const map = new Map()
  for(let i = 0; i < inorder.length; i++) {
      map.set(inorder[i], i)
  }

  const helper = (p_start, p_end, i_start, i_end) => { 
      if(p_start > p_end || i_start > i_end) {
          return null
      }

      let rootVal = preorder[p_start]
      let node = new TreeNode(rootVal)
      let mid = map.get(rootVal)
      let leftNum = mid - i_start

      node.left = helper(p_start+1, p_start+leftNum, i_start, mid - 1)  // 这里要非常主要左右下标的截取，是左闭右闭，范围内的值必须都是左子树的值
      node.right = helper(p_start+1+leftNum, p_end, mid+1, i_end)

      return node
  }

  return helper(0, preorder.length-1, 0, inorder.length - 1)
};
