/*
剑指 Offer 46. 把数字翻译成字符串
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 

提示：

0 <= num < 231

https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
*/ 
// 思路：动态规划

/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
  // 把数字转成字符串数组
  let str = num.toString()

  let a = 1  // 一个数字一定可以翻译成一种字母
  let b = 1  // 两个数字有可能可以翻译成一种字母，先给个预设数字 1

  for(let i = 2; i <= str.length; i++) {
      let tmp = str.slice(i-2, i) // 获取当前位置的前两个数字
      let c
      if(tmp > 9 && tmp < 26) {
          c = a + b
      } else {
          c = a
      }
      b = a // b 前两个数字的可以翻译的次数
      a = c // a 表示前一个数字可以翻译的次数
  }

  return a

};
