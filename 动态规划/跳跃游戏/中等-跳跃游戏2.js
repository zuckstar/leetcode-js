/*
45. 跳跃游戏 II
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

 

示例 1:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: [2,3,0,1,4]
输出: 2
 

提示:

1 <= nums.length <= 1000
0 <= nums[i] <= 105

https://leetcode-cn.com/problems/jump-game-ii/
*/

var jump = function(nums) {
    
  let length = nums.length

  // 当前终止位置
  let end = 0
  let reach = 0
  let steps = 0

  for(let i = 0; i < length - 1; i++) {  // length 不需要检查最后一个位置，最后一个位置已经不用跳了。所以这里是 length -1 

      // 每次遍历都更新当前能达到的最大位置
      reach = Math.max(reach, nums[i] + i)

      if(i == end) {
          // 指针到达终止位置，就要跳一下，并且更新终止位置为当前最大可触及的范围
          steps++
          end = reach
      }
  }

  return steps
};