/*
263. 丑数
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

丑数 就是只包含质因数 2、3 、5 的正整数。

 

示例 1：

输入：n = 6
输出：true
解释：6 = 2 × 3
示例 2：

输入：n = 8
输出：true
解释：8 = 2 × 2 × 2
示例 3：

输入：n = 14
输出：false
解释：14 不是丑数，因为它包含了另外一个质因数 7 。
示例 4：

输入：n = 1
输出：true
解释：1 通常被视为丑数。
 

提示：

-2^31 <= n <= 2^31 - 1

https://leetcode-cn.com/problems/ugly-number/
*/


var isUgly = function(n) {

  if(n <= 0) return false // 需要排除数字小等于0的情况

  let arr = [2, 3, 5]

  for(let p of arr) {
      while(n % p == 0) {
          n /= p 
      }
  }

  return n == 1
};