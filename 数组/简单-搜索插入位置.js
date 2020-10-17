/*
  35. 搜索插入位置
  https://leetcode-cn.com/problems/search-insert-position/
  
  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

  你可以假设数组中无重复元素。



  示例 1:

  输入: [1,3,5,6], 5
  输出: 2
  示例 2:

  输入: [1,3,5,6], 2
  输出: 1
  示例 3:

  输入: [1,3,5,6], 7
  输出: 4
  示例 4:

  输入: [1,3,5,6], 0
  输出: 0


*/


const eg1 = [1, 3, 5, 6]
const log = console.log

/*  解法一： 时间复杂度 O(n) */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length

};

/*  解法二（二分法）： 时间复杂度 O(logn) */
var searchInsert = function (nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = (low + high) >> 1

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }

  }

  return low
};
log(searchInsert(eg1, 2))
