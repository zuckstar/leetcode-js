
/*
剑指 Offer 26. 树的子结构
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true
限制：

0 <= 节点个数 <= 10000

https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
*/ 

// 本题中包含着一个子问题，判断两棵树是否相等，建议可以先完成该题的基础上再来做这道题。
var isSubStructure = function(A, B) {

    // 空树不是任何一个树的子结构，!B 成立为假，若 !A 成立，无法计算子结构，返回假
    if(!A || !B) return false

    const isSubTree = (n, m) => {
        // m 树提前遍历结束，返回真
        if(!m) return true
        // n 树遍历结束，然而 m 树还没遍历结束，返回假
        if(!n) return false
        // 值不相等返回假
        if(n.val != m.val) return false

        return isSubTree(n.left, m.left) && isSubTree(n.right, m.right)
    }

    return isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};