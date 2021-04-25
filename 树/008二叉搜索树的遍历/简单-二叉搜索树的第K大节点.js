/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。

 

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 

限制：

1 ≤ k ≤ 二叉搜索树元素个数

https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */ 

/*
思路一： 利用二叉树的中序遍历法遍历二叉搜索树，把每个节点的值加入数组，可以得到一个按序排列的节点值数组
把数组反转，取第 k-1 个元素，就是二叉搜索树的第k大节点。
这里有个奇妙的做法，二叉树的中序遍历是 左、根、右的方法遍历出顺序的节点值，那么可以利用 右、根、左这一顺序可以遍历出逆序的节点值
这样直接取数组的第 k - 1 个元素就可以了，省去了一个数组反转。
*/

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res = []

  var helper = (node) => {
      if(!node) return null

      helper(node.right)
      res.push(node.val)
      helper(node.left)
      
      
  }
  helper(root)
  return res[k-1]
};
/*
优化： 利用思路一当然可以正确的解题，但是效率还是太低，因为无论 k 为什么值，算法都要从头到尾遍历一次所有的节点
如果能在遍历到第 k 大的节点的时候，直接返回结果，能减少一些无用的遍历。
*/ 


var kthLargest = function(root, k) {
  let number = 0
  let res = root.val

  var helper = (node) => {
      if(!node) return
      
      helper(node.right)
      number++  // 注意 number++ 的时机，是在遍历当前节点前加一，不能在helper之前加一，如果在 helper 之前加一会把遍历路径时候经过的节点数也算上。
      if(number === k) {
          res = node.val
          return;
      }
      helper(node.left)
      
      
  }
  helper(root)
  return res
};
