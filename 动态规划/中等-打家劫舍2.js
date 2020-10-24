/* 
152. 乘积最大子数组 
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

 

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


// 思路和打家劫舍一样，可以把这个问题转换成两个子问题，每一个子问题的解法和打家劫舍1的思路一致
// 即不偷第一个房屋和不偷最后一个房屋，避免首尾相连的情况 dp(0,n-1) dp(1,n)
// 这道题需要注重边界的情况，当没有房屋打劫的时候返回0，当只有一户家庭的时候，直接返回当前家庭的财产，如果此时用 slice 分割数组，有可能出现两个判空数组的dp 
// 用滚动变量的方法来代替new一个dp数组，不仅能减少空间复杂度，还能避免出现dp数组越界的情况

var rob = function (nums) {
  if (!nums || nums.length === 0) return 0
  let n = nums.length
  if (n === 1) return nums[0]
  return Math.max(dp(nums.slice(0, n - 1)), dp(nums.slice(1, n)))
};

var dp = function (nums) {
  let lastTwo = 0,
    cur = 0,
    lastOne

  for (let i = 0; i < nums.length; i++) {
    lastOne = cur
    cur = Math.max(lastTwo + nums[i], cur)
    lastTwo = lastOne

  }
  return cur
}
console.log(rob(
  [1]))
