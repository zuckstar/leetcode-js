/*
  303. 区域和检索 - 数组不可变

  给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

  示例：

  给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

  sumRange(0, 2) -> 1
  sumRange(2, 5) -> -1
  sumRange(0, 5) -> -3
  说明:

  你可以假设数组不可变。
  会多次调用 sumRange 方法。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/range-sum-query-immutable
*/

// 提前计算前缀和后求解
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let length = nums.length
  let presum = new Array(length + 1)
  presum[0] = 0
  for (let i = 1; i <= length; i++) {
    presum[i] = presum[i - 1] + nums[i - 1]
  }
  this.presum = presum
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.presum[j + 1] - this.presum[i]
};
