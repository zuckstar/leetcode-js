/*
96. 不同的二叉搜索树
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3


   https://leetcode-cn.com/problems/unique-binary-search-trees/
*/ 
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = new Array(n+1).fill(0) // 保证初始化的数组空间足够，且有初始值

  dp[0] = 1
  dp[1] = 1

  for(let i = 2; i <= n; i++) {  // 动态规划，i 表示当前的二叉搜索树的节点个数
      for(let j = 1; j <= i; j++) {  
      // j 表示当前的根节点序号，在 i 个节点中，任意一个节点都可以作为根节点，且最终的搜索树结构是不同的。
      // 当序号 j 为根节点的时候，根节点左侧有 j-1 个节点，这 j-1 个节点又有 dp[j-1] 个排法，根节点的右边有 i-j 个节点，这 i-j 个节点有 dp[i-j] 种排法，则以 j 为根节点的二叉搜索树有 dp[j-1] * dp[i-j]种排序方法，
      // 则 i 个节点的情况下，共有 G(i) 种不同的二叉树，G(i) = fn(1) + fn(2) + ... +fn(i)
      // fn(j)  = dp[j-1] * dp[i-j]
          dp[i] += dp[j-1] * dp[i-j]
      }
  }
  return dp[n]
};
