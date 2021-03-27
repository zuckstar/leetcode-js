/*
剑指 Offer 45. 把数组排成最小的数
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"
 

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
*/ 

/*
解题思路：
此题求拼接起来的最小数字，本质上是一个排序问题。
若 x+y > y+x 则 x 大于 y
反之 x+y < y+x 则 x 小于 y
根据以上规则，套用任何排序方法对 numsnums 执行排序即可。
*/ 

/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
  const sortFunc = (a, b) => {
      let num1 = String(a) + b
      let num2 = String(b) + a
      if(num1 < num2) return - 1
      if(num2 < num1) return 1
      return 0
  }
  nums.sort(sortFunc)
  return nums.join('')
};
