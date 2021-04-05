/*
剑指 Offer 65. 不用加减乘除做加法
写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

 

示例:

输入: a = 1, b = 1
输出: 2
 

提示：

a, b 均可能是负数或 0
结果不会溢出 32 位整数

https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
*/ 

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {

  // 把 b 当做进位数字，当进位不等于0的时候，就继续做异或运算，否则就输出结果
  while(b != 0) {
      let c = (a & b) << 1 // 计算进位
      a ^= b // 非进位和
      b = c  // 把新的进位结果赋予 b
  }

  return a
};
