/*
  169. 多数元素

  https://leetcode-cn.com/problems/majority-element/
    
  给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

  你可以假设数组是非空的，并且给定的数组总是存在多数元素。

  示例 1:

  输入: [3,2,3]
  输出: 3
  示例 2:

  输入: [2,2,1,1,1,2,2]
  输出: 2

*/

const log = console.log


/**
 * @param {number[]} nums
 * @return {number}
 */

/*
1. 可以使用投票计数法，用一个{}来记录当前数字出现的次数，最后取出现次数最多的
2. 排序法，由于超过一半的数字一定存在，可以对数字排序，取中间的那个数字，一定是众数
3. 抵消法，由于众数出现的频次必然大于其他数字，所以对数字进行相同累加，不同次数减少，减少到0的时候，记录当前数，最后剩下的一定是众数
*/
var majorityElement = function (nums) {
  let times = 0
  let num = 0

  for (let i = 0; i < nums.length; i++) {
    if (times == 0) num = nums[i]
    nums[i] == num ? times++ : times--
  }
  return num
};

log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
