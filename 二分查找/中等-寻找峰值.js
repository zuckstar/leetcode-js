/*
162. 寻找峰值
峰值元素是指其值大于左右相邻值的元素。

给你一个输入数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

 

示例 1：

输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
示例 2：

输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5 
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
 

提示：

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
对于所有有效的 i 都有 nums[i] != nums[i + 1]
 

进阶：你可以实现时间复杂度为 O(logN) 的解决方案吗？
*/ 

/*
峰值就是左右两边的元素的值都比当前元素的值要小

因为可以假设 nums[-1] = nums[n] = -∞ ，所以数组的头尾元素也可能是峰值元素


那么寻找峰值元素就可以分为三种情况：

1） 元素从前往后一直递减的数组，峰值元素为数组的第一个元素
2） 元素从前往后一直递增的数组，峰值元素为数组的最后一个元素
3） 峰值元素在数组的中间

因只要找出一个峰值元素即可，所以只需要找到存在  nums[n] > nums[n+1] 即可，把该算法代入以上三种场景，发现可以解决问题，得出解法一，遍历法
时间复杂度 O(n), 空间复杂度O(1)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for(let i = 0; i < nums.length - 1; i++) {
      if(nums[i] > nums[i+1]) {
          return i
      }
  }
  return nums.length - 1
};

/** 
 *  二、二分法
 *  通过二分法，来定位峰值元素所在的位置，时间复杂度可以降低到 O(log2n)
 *  1）当 mid 大于右侧的值的时候，峰值可能在 mid 值的左侧（可能包括mid）
 *  2）当 mid 小于右侧值的时候，峰值可能在 mid 的右侧（不包括mid）
 *  3）逐步缩小搜索空间, 直至左右指针相遇即是峰值
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1

  while(left < right) {
      let mid = left + ((right - left) >> 1)

      if(nums[mid] > nums[mid+1]) {
          right = mid
      } else {
          left = mid + 1
      }
  }
  return left
};
