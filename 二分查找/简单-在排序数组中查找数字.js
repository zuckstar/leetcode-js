/*
剑指 Offer 53 - I. 在排序数组中查找数字 I
统计一个数字在排序数组中出现的次数。

 

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 

限制：

0 <= 数组长度 <= 50000

https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

*/ 

/*
思路： 
利用二分查找，在数组中寻找 target 的（右边界 + 1 ）位置 right1 以及 target - 1 的（右边界的 + 1 ）位置 right0

计算 right1 - right0 的长度即可求得 target 的个数
*/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const helper = (nums, tar) => {
      let left = 0
      let right = nums.length - 1

      // 关键点1：  如果仅仅是 left < right 有可能漏判了 left == right 的时候是 target 的情况。以及数组中仅有一个元素的情况
      while(left <= right) {
          
          let mid = left + ((right - left ) >> 1)
          
          // 关键点2： 只要 mid 的值小等于目标就挪动指针继续向右寻找右边界
          if(nums[mid] <= tar) 
              left = mid + 1
          else 
              right = mid - 1
      }
      return left
  }

  return helper(nums, target) - helper(nums, target - 1)
};
