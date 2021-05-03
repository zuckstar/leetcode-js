/*

剑指 Offer 56 - II. 数组中数字出现的次数 II
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

 

示例 1：

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
 

限制：

1 <= nums.length <= 10000
1 <= nums[i] < 2^31
 
https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
*/ 


// 解法一： 利用 map 来记录数字出现的次数后再遍历 map 结构，记录为 1 的即时结果

var singleNumber = function(nums) {
  let map = {}
  for(const num of nums) {
      map[num] ? map[num]++ : map[num] = 1
  }

  for(const num in map) {
      if(map[num] === 1) 
          return num
  } 
  return null
};

// 解法二： 利用位运算，计算所有数字二进制每一位上 1 出现的次数，余3，最终的结果就是只出现一次的那个数字在该位上的值
var singleNumber2 = function(nums) {
  let res = 0
  for(let i = 0; i < 32; i++) {
      let m = 1 << i
      let times = 0
      for(let j = 0; j < nums.length; j++) {
          if(nums[j] & m) {
              times++
          }
      }
      if(times % 3) {
          res = res | m
      }
  }
  return res
};
