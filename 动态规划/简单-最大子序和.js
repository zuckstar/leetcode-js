/*
  53. 最大子序和
  https://leetcode-cn.com/problems/maximum-subarray/
  
  给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

  示例:

  输入: [-2,1,-3,4,-1,2,1,-5,4]
  输出: 6
  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

  进阶:

  如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/

// 一：贪心算法
// 若当前指针所指元素之前的和小于0， 则丢弃当前元素之前的数列

var maxSubArray = function (nums) {
  let preSum = 0
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (preSum > 0) {
      preSum += nums[i]
    } else {
      preSum = nums[i]
    }
    max = Math.max(max, preSum)
  }
  return max
}

// 二：动态规划
var maxSubArray = function (nums) {
  let max = nums[0]
  let preSum = 0

  nums.forEach((num) => {
    preSum = Math.max(preSum + num, num)
    max = Math.max(max, preSum)
  })

  return max
}
