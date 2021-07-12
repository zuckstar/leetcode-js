/*
215. 数组中的第K个最大元素
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

 

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104

https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  const swap = (a, b) => {
      [nums[a], nums[b]] = [nums[b], nums[a]]
  }

  const partition = (left, right) => {
      let pivot = nums[left]
      let j = left

      for(let i = left + 1; i <= right; i++) {
          if(nums[i] < pivot) {
              j++
              swap(i, j)
          }
      }

      swap(left, j)

      return j
  }

  let left = 0
  let right = nums.length - 1
  let target = nums.length - k
  
  while(true) {
      let index = partition(left, right)

      if(index == target) {
          return nums[target]
      } else if(index < target) {
          left = index + 1
      } else {
          right = index - 1
      }
  }
};