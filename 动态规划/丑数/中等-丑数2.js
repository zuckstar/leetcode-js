/*
剑指 Offer 49. 丑数
我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

 

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  

1 是丑数。
n 不超过1690。

https://leetcode-cn.com/problems/chou-shu-lcof/
*/ 

// 思路: 动态规划，关键点 a2,a3,a5 记录的是指针位置

/**
 * @param {number} n
 * @return {number}
 */

 var nthUglyNumber = function(n) {
  let a2 = 0, a3 = 0, a5 = 0
  let dp = []
  dp[0] = 1

  for(let i = 1; i < n; i++) {
      
      dp[i] = Math.min(dp[a2]*2, dp[a3]*3, dp[a5]*5) 

      if(dp[i] == dp[a2]*2) a2++
      if(dp[i] == dp[a3]*3) a3++
      if(dp[i] == dp[a5]*5) a5++
  }
  
  return dp[n-1]
};
