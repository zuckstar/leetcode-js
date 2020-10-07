/*
  219. 存在重复元素 II

  https://leetcode-cn.com/problems/contains-duplicate-ii/
    
  给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

   

  示例 1:

  输入: nums = [1,2,3,1], k = 3
  输出: true
  示例 2:

  输入: nums = [1,0,1,1], k = 1
  输出: true
  示例 3:

  输入: nums = [1,2,3,1,2,3], k = 2
  输出: false

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/* 暴力求解 时间复杂度 O(n2) 比较慢 */
var containsNearbyDuplicate = function (nums, k) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false
};
/* 维护一个长度为 k 的Set/Map数据结构，每添加一个数据就判断是否已存在，超出长度 k 则移除之前的元素，若重复则返回 true 时间复杂度 O(n) */
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set()
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])

    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
};
