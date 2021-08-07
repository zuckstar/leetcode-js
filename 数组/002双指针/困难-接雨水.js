/*
42. 接雨水
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 

提示：

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

https://leetcode-cn.com/problems/trapping-rain-water/
*/

// 动态规划法：
var trap = function (height) {
  const n = height.length
  if (n == 0) {
    return 0
  }

  // 从左至右找到左边界的最大值
  const leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  // 从右至左找到右边界的最大值
  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  // 根据左右边界值高低差，把当前高度和更低的边界做差值，计算累计雨水
  let ans = 0
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return ans
}

// 双指针法：
var trap = function (height) {
  let ans = 0

  let leftMax = 0
  let rightMax = 0

  let left = 0
  let right = height.length - 1

  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (height[left] < height[right]) {
      ans += leftMax - height[left]
      left++
    } else {
      ans += rightMax - height[right]
      right--
    }
  }

  return ans
}
