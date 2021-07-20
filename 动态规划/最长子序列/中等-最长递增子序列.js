/*
300. 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

进阶：

你可以设计时间复杂度为 O(n2) 的解决方案吗？
你能将算法的时间复杂度降低到 O(n log(n)) 吗?

https://leetcode-cn.com/problems/longest-increasing-subsequence/
*/

// 时间复杂度 O(n2) 空间复杂度 O(n) 的算法
var lengthOfLIS = function(nums) {
  let len = nums.length

  // 每一个位置的最长递增子序列长度默认为 1
  let dp = new Array(len).fill(1)

  // 默认最大值为1 
  let maxRes = 1

  for(let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
          // 开始更新当前位置的最长递增子序列长度
          if(nums[i] > nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i]) 
    }
      // 更新最大值
      maxRes = Math.max(dp[i], maxRes)
  }

  return maxRes
};

// 动态规划+二分查找
// 让尽可能较小的数插到尾数组里面去，理论上，数值越小，最终拼成最长子序列的概率越大
// 此时利用二分法插入来减少时间复杂度

var lengthOfLIS = function(nums) {
  let len = nums.length
  let tails = []
  let res = 0

  for(let i = 0; i < len; i++) {
      let start = 0, end = res
      while(start < end) {
          let mid = (start+end) >> 1
          if(nums[i] <= tails[mid]) end = mid
          else start = mid + 1
      }

      tails[start] = nums[i]
      
      if(res == end) res += 1 // 如果更新的是最后一位
  }
  return res
};

// 小幅度优化
var lengthOfLIS = function(nums) {
  let len = nums.length
  let tails = []
  let res = 1
  
  tails[res] = nums[0] // 初始化第一个值

  for(let i = 1; i < len; i++) {
      if(nums[i] > tails[res]) {
          tails[++res] = nums[i]
      } else {
          let left = 1
          let right = res

          // 二分查找的开始条件
          while(left < right) {
              let mid = (left+right)>>1
              if(tails[mid] >= nums[i]) right = mid // 关键条件，向左移动限制
              else left = mid + 1
          }

          tails[left] = nums[i]
      }
  }

  return res
  
};