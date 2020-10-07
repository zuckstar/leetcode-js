/*
  268. 缺失数字

  https://leetcode-cn.com/problems/missing-number/
    
  给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
  
  示例 1:

  输入: [3,0,1]
  输出: 2
  示例 2:

  输入: [9,6,4,2,3,5,7,0,1]
  输出: 8
   

  说明:
  你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

*/

// 方法一： 累计求前 0...n项的和,减去数组中数字的总和，得到的差值就是缺失的数字（数学高斯求法）
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0
  let n = nums.length
  for (let item of nums) {
    sum += item
  }
  return n * (n + 1) / 2 - sum
};

// 方法二：异或求法（由于异或运算（XOR）满足结合律，并且对一个数进行两次完全相同的异或运算会得到原来的数）
var missingNumber = function (nums) {
  let n = nums.length
  let res = n
  for (let i = 0; i < n; i++) {
    res ^= i
    res ^= nums[i]
  }
  return res
};
