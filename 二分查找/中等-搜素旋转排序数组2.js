/*
81. 搜索旋转排序数组 II
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:

输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
示例 2:

输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false
进阶:

这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？

*/ 

// 分析： 请先完成搜索旋转排序数组 I

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
  
    while(left <= right) {
        let mid = left + ((right - left) >> 1)
  
        if(nums[mid] === target) return true
  
        // 相等
        if(nums[left] === nums[mid]) {
          left++
          continue
      }
        // 前半部分有序
        if(nums[left] < nums[mid]) {
            // target 在区间内
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            }
            // target 不在区间内
            else {
                left = mid + 1
            }
        }
        // 后半部分有序
        else {
            // target 在区间内
            if(nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            }
            // target 不在区间内 
            else {
                right = mid - 1
            }
        }
    }
    return false
  };
