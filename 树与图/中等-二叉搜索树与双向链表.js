/*
剑指 Offer 36. 二叉搜索树与双向链表
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
*/ 

// 思路：二叉搜索树 =》 中序遍历（左根右）
 var treeToDoublyList = function(root) {
  if(!root) return null

  // 头指针和前指针
  let head, pre

  const dfs = (node) => {
      if(!node) return

      dfs(node.left) // 遍历左子树

      if(pre) {
          pre.right = node
      } else {
          head = node
      }

      node.left = pre
      pre = node

      dfs(node.right) // 遍历右子树
  }

  dfs(root)

  // 修复头尾节点，连接指针
  head.left = pre
  pre.right = head

  return head
};
