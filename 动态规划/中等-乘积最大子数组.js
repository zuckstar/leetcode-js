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

/* 
  分析： 由于乘数有正数和负数之分，所以需要考虑保留最大数和最小数的情况，
  最大值可能是，
  
  (1)之前数组的累计乘积的最大值 * 当前数字 (当前数字为正数)
  (2)之前数组的累计乘积的最小值 * 当前数字（当前数字为负，负负得正，变成了最大值）
  
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums || nums.length === 0) return 0

  let max = pMax = pMin = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let tempMax = pMax,
      tempMin = pMin
    pMax = Math.max(nums[i], tempMax * nums[i], tempMin * nums[i]) // 把所有情况都拿来比较大小，就不用单独if判断考虑正负数的情况
    pMin = Math.min(nums[i], tempMax * nums[i], tempMin * nums[i])
    max = Math.max(pMax, max)
  }
  return max
};
console.log(maxProduct([-4, -3, -2]))
