/*
剑指 Offer 59 - I. 滑动窗口的最大值
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
*/ 

// 解法一：两端开口的队列
// 1. 需要一个两端开口的队列
// 2. 队列中存储的是数组的下标而不是值，方便判断元素的位置，以及是否在滑动窗口中
// 3. 保证队列头永远是当前窗口内最大元素的下标，从大到小依次从前往后排序
// 4. 如果新进的元素比队列尾元素要大，则弹出队尾元素，直到队尾元素大于新元素或者队列为空为止，压入新元素


var maxSlidingWindow = function(nums, k) {

  // 滑动窗口，双端队列
  let windows = []

  // 结果数组
  let res = []

  for(let i = 0; i < nums.length; i++) {
      
      if(windows.length && i >= windows[0] + k) {
          windows.shift()
      }

      // 注意：由于滑动窗口中存放的是下标，比较的时候一定要把下标转成数值
      while(windows.length && nums[i] > nums[windows[windows.length - 1]]) {
          windows.pop()
      }

      windows.push(i)

      if(i >= k - 1) {
          res.push(nums[windows[0]])
      }

  }

  return res
};
