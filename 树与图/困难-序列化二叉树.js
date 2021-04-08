/*
剑指 Offer 37. 序列化二叉树
请实现两个函数，分别用来序列化和反序列化二叉树。

示例: 

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"

https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
*/ 

// 思路：树的按层遍历 BFS + 辅助队列来还原二叉树

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  if(!root) return ''
  let queue = [root]
  let res = []
  while(queue.length) {
      let node = queue.shift()
      if(node) {
          res.push(node.val)
          queue.push(node.left)
          queue.push(node.right)
      } else {
          res.push('x')
      }
  }

  return res.join(',')
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if(data == '') return null

  let nodes = data.split(',')
  let root = new TreeNode(nodes[0])
  let queue = [root]
  nodes.shift()

  while(queue.length) {

      let node = queue.shift()

      let leftValue = nodes.shift()
      if(leftValue != 'x') {
          node.left = new TreeNode(leftValue)
          queue.push(node.left)
      } 
      
      let rightValue = nodes.shift()
      if(rightValue != 'x') {
          node.right = new TreeNode(rightValue)
          queue.push(node.right)
      }
  }

  return root
};
