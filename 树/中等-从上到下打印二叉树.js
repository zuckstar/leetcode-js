/*
剑指 Offer 32 - I. 从上到下打印二叉树
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 


// 相当于简化版的二叉树层序遍历，利用队列先进先出的性质来记录左右子树先后遍历的顺序

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {

  let res = []
  
  if(!root) return res

  let queue = [root]

  while(queue.length) {
      let tmp = queue.shift()
      res.push(tmp.val)
      if(tmp.left) queue.push(tmp.left)
      if(tmp.right) queue.push(tmp.right)   
  }

  return res


};
