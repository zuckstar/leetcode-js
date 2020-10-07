/*
  217. 存在重复元素

  https://leetcode-cn.com/problems/contains-duplicate/
    
  给定一个整数数组，判断是否存在重复元素。

  如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

  示例 1:

  输入: [1,2,3,1]
  输出: true

  示例 2:

  输入: [1,2,3,4]
  输出: false
  
  示例 3:

  输入: [1,1,1,3,3,4,3,2,4,2]
  输出: true

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 传统做法，构建hash表来记录元素是否存放过 时间复杂度O(n)，空间 O(n)*/
var containsDuplicate = function (nums) {
  let map = {}
  for (let item of nums) {
    if (map[item]) return true
    map[item] = 1
  }
  return false
};

/* 利用JS中的Set的结构来快速计算是否存在重复元素，即判断size是否和原有的数组长度相等 时间O(1) 空间O(n)*/
var containsDuplicate = function (nums) {
  return new Set(nums).size != nums.length;
};
/* 也可以把原数组排序后比较相邻元素是否相同，不过这种就慢了 时间复杂度为O(nlogn) 空间O(1), 但是如果对空间复杂度有要求的可以用这种*/
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i - 1] == nums[i]) {
      return true;
    }
  }
  return false;
};
