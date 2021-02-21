/*

面试题 08.01. 三步问题
    
三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:

 输入：n = 3 
 输出：4
 说明: 有四种走法
示例2:

 输入：n = 5
 输出：13
提示:

n范围在[1, 1000000]之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/three-steps-problem-lcci

*/

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  let dp = [0, 1, 2, 4]
  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007
  }
  return dp[n];
};

// 由于 n 的范围比较大，需要考虑数组空间优化
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  let dp = [0, 1, 2, 4]
  let res = dp[n] ? dp[n] : 0
  for (let i = 4; i <= n; i++) {
    res = (dp[1] + dp[2] + dp[3]) % 1000000007
    dp[1] = dp[2]
    dp[2] = dp[3]
    dp[3] = res
  }
  return res;
};
