/*
110. 平衡二叉树
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

https://leetcode-cn.com/problems/balanced-binary-tree/
*/ 



// 解法一：利用求二叉树的深度的算法，自顶向下的递归，比较左右子树的高度差
/*
  时间复杂度 O(n2),
  最坏情况下，二叉树是满二叉树，需要遍历二叉树的所有节点，时间复杂度是 O(n)
  对于一个节点，如果它的高度是d，最多它会被调用d次（每一层调用高度算法的时候，都会计算一次）
  对于平均的情况，一棵树的高度满足 O(h) = O(logn),即平均每个节点被调用 O(logn) 次
  所以对于平均的情况，时间复杂度是 O(nlogn),
  对于最坏的情况，二叉树形成链式结构，高度为 O(n)O(n)，此时总时间复杂度为 O(n^2)O(n2)。
*/ 


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(root == null) {
      return true
  } else {
      return Math.abs(getHeight(root.left)- getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  }
};

var getHeight = function(root) {
  if(root == null) {
      return 0
  } else {
      let leftDep = getHeight(root.left)
      let rightDep = getHeight(root.right)

      return Math.max(leftDep, rightDep)+1
  }
}

// 解法二：自底向上的递归
/*
  时间复杂度 O(n)
  使用自底向上的做法，则对于每个节点，函数 \texttt{height}height 只会被调用一次。
  当前节点为根的子树若不平衡，则整个二叉树都不平衡
*/ 
var isBalanced = function(root) {
  return getHeight(root) >= 0
};

var getHeight = function(root) {
  if(root == null) {
      return 0
  } else {
      let leftDep = getHeight(root.left)
      let rightDep = getHeight(root.right)

      if(leftDep == -1 || rightDep == -1 || Math.abs(leftDep-rightDep) > 1) {
          return -1
      }
      return Math.max(leftDep, rightDep)+1
  }
}
