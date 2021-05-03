/*
  面试题 17.10. 主要元素
  https://leetcode-cn.com/problems/find-majority-element-lcci/
  
  数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。


  示例 1：

  输入：[1,2,5,9,5,9,5,5,5]
  输出：5
   

  示例 2：

  输入：[3,2]
  输出：-1
   

  示例 3：

  输入：[2,2,1,1,1,2,2]
  输出：2

  说明：
  你有办法在时间复杂度为 O(N)，空间复杂度为 O(1) 内完成吗？

*/
const eg1 = [1, 2, 5, 9, 5, 9, 5, 5, 5]
const eg2 = [3, 2]
const eg3 = [2, 2, 1, 1, 1, 2, 2]

const log = console.log

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let times = 0
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    if (times == 0) num = nums[i]
    num === nums[i] ? times++ : times--
  }

  return times > 0 ? num : -1
};

log(majorityElement(eg2))
