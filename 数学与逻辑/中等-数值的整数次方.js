/*
剑指 Offer 16. 数值的整数次方
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

 

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
 

提示：

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
 

https://leetcode-cn.com/problems/powx-n/
*/
// 思路一：递归求解，时间复杂度 O(logn),
// x5 可以分解为 x2 * x2 * x
// x8 可以分解为 x4 * x4
// 以此类推
// 需要注意区分 n < 0 的情况，以及 n = 0 的情况
var myPow = function (x, n) {
  let quickMul = (x, n) => {
    if (n === 0) return 1

    let y = quickMul(x, Math.floor(n / 2))

    return n % 2 ? y * y * x : y * y
  }
  if (x === 0) return 0
  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)
}

// 思路二：快速幂，利用指数转二进制+位移运算，进行快速幂计算

var myPow = function (x, n) {
  let res = 1.0

  if (n === 0) return 1 // 处理 n 为 0 的情况
  if (x === 0) return 0 // 处理 x 为 0 的情况

  let absN = Math.abs(n)

  while (absN > 0) {
    if (absN & 1) res *= x

    x = x * x

    absN >>>= 1 // 无符号移位，重点
  }

  return n > 0 ? res : 1 / res
}
