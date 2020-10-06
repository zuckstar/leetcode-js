/*
  167. 两数之和 II - 输入有序数组

  https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
    
  给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

  函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

  说明:

  返回的下标值（index1 和 index2）不是从零开始的。
  你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
  示例:

  输入: numbers = [2, 7, 11, 15], target = 9
  输出: [1,2]
  解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

*/

const log = console.log

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/* 因为数组是排好序的，可以双指针解法 */
var twoSum = function (numbers, target) {
  let begin = 0
  let end = numbers.length - 1

  while (begin < end) {
    if (numbers[begin] + numbers[end] == target) {
      return [begin + 1, end + 1]
    } else if (numbers[begin] + numbers[end] < target) {
      begin++
    } else {
      end--
    }
  }
  return [begin + 1, end + 1]
};

log(twoSum([2, 7, 11, 15], 9))
