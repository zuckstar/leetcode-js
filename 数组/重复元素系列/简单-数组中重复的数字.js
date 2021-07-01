/*
剑指 Offer 03. 数组中重复的数字
找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 

限制：

2 <= n <= 100000

https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

*/ 

// 解法1：利用 Set 或者 Map 数据结构的特性，来判断数字是否已经储存过

var findRepeatNumber = function(nums) {
  let map = new Map()

  for(let i = 0; i < nums.length; i++) {
      if(map.has(nums[i])) {
          return nums[i]
      } else {
          map.set(nums[i], i)
      }
  }
  return -1
};    

// 解法2：不利用额外空间，原地置换法 O(n) 时间复杂度（原地哈希法）
var findRepeatNumber = function(nums) {
    let i = 0
    while(i < nums.length) {
        let item = nums[i]
        if(nums[i] === i) {
            i++
            continue
        }

        if(nums[item] === item) return item

        let tmp = nums[item]
        nums[item] = nums[i]
        nums[i] = tmp
    }

    return -1

};
