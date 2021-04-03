/*
剑指 Offer 61. 扑克牌中的顺子
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

 

示例 1:

输入: [1,2,3,4,5]
输出: True
 

示例 2:

输入: [0,0,1,2,5]
输出: True
 

限制：

数组长度为 5 

数组的数取值为 [0, 13] .



https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/solution/
*/ 

// 思路：由题意可得
// 1. 顺子中不能有重复的数字
// 2. 最大值减最小值不能超过5

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
  let set = new Set()
  let max = 0
  let min = 14
  for(let num of nums) {
      if(num == 0) continue
      if(set.has(num)) return false
      set.add(num)
      if(num > max) max = num
      if(num < min) min = num
      
  }
  return (max - min) < 5
};
