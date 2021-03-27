/*
剑指 Offer 44. 数字序列中某一位的数字
数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

 

示例 1：

输入：n = 3
输出：3
示例 2：

输入：n = 11
输出：0
 

限制：

0 <= n < 2^31

https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
*/ 


// 思路：
// 位数为 1 的数位数量为 9 = 1*9*1  1~9
// 位数为 2 的数位数量为 180 = 10*9*2  10~99
// 位数为 3 的数位数量为 2700 = 100*9*3 100~999
// 位数为 n 的数位数量为 n = 9*start*count
/**
 * 寻找第 n 位所对应的数字
 * 1、确定 n 所在的位数 digit
 * 2、确定 n 所在的数字 num（整数num)
 * 3、求得该位数的具体数字
 ** / 
 /**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let start = 1, digit = 1, count = 9

  // 计算 n 所在的位数, 例如 101 = 9 + 2 * 9 * 10 + 2, digit = 3, start = 100
  while(n > count) {
      n -= count
      start *= 10
      digit++
      count = start * digit * 9
  }

  // 计算 n 所在的那个数字, start + (n-1)//digit = 100 + (2-1)//3 = 101
  // n - 1 的目的是为了拉平 start 比 count 多出来的一个差值，例如 count = 9+90 start = 100 之间差了1，少扣了一个1，需要用 n-1来抹平
  let num = start + Math.floor((n-1)/digit)

  // 这里的 n - 1 也是同样的道理
  return String(num)[(n-1)%digit]
};
