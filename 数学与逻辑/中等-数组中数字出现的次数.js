/*
剑指 Offer 56 - I. 数组中数字出现的次数
一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
 

限制：

2 <= nums.length <= 10000

https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
*/ 

// 思路： 利用异或算法
// 分析： 任何数异或本身得 0， 0 异或任意数得该任意数本身， 异或等于两个数的二进制每一位都进行计算，相同得 0， 不同得 1
// 1. 对整个数组遍历进行一次异或，得到两个只出现一次的数字异或的结果 ret
// 2. 由于两个数不相同，所以他们异或的结果 ret 必定不等于 0，也就是二进制下至少有一位为 1
// 3. 找到 ret 中其中一位为 1 的一位
// 4. 根据这一位为 0 或者为 1 重新把原来的数组分成两组，这里就把两个数给分开了
// 5. 分别对新的两组数各自进行异或，得到的两个数字就是该数组中只出现一次的两个数字



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {

  let n = 0

  for(let num of nums) {
      n ^= num
  }
  let pos = 1

  while((n & pos) == 0 ) {
      pos <<= 1
  }

  let num1 = 0
  let num2 = 0
  
  for(let num of nums) {
      if(num & pos)  { // 这里不能写 num & pos == 1， 例如 8 & 9 = 8
          num1 ^= num
      } else {
          num2 ^= num
      }
  }
  return [num1, num2]
};
