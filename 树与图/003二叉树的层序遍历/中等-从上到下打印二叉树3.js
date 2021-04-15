/*
剑指 Offer 32 - III. 从上到下打印二叉树 III
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
 

提示：

节点总数 <= 1000
*/ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//  利用栈后进先出的特性来求解
var levelOrder = function(root) {

  let res = []
  if(!root) return res
  let stack1 = [root]
  let stack2 = []
  

  while(stack1.length || stack2.length) {
          let tmp = []
          if(stack1.length) {
              while(stack1.length) {
                      let node = stack1.pop()
                      tmp.push(node.val)
                      if(node.left) stack2.push(node.left)
                      if(node.right) stack2.push(node.right)
                  }
          } else if(stack2.length) {
              while(stack2.length) {
                  let node = stack2.pop()
                  tmp.push(node.val)
                  if(node.right) stack1.push(node.right)
                  if(node.left) stack1.push(node.left)
              }
          }
      res.push(tmp)

  }
  return res

};

// 记录当前遍历的层数，偶数层进行翻转，因序号从0开始，所以判断中变成奇数层开始翻转
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder2 = function(root) {
  let res = []
  if(!root) return res

  let queue = [root]
  let order = 0
  while(queue.length) {

      let tmp = []
      let len = queue.length

      while(len--) {
          let node = queue.shift()
          tmp.push(node.val)
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
      }

      if(order % 2) tmp.reverse()

      res.push(tmp)
      order++

  }
  return res
};
