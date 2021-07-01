/*
442. 数组中重复的数据
给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]

https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
*/


// 累加法
var findDuplicates = function(nums) {
  let n = nums.length
  let res = []


  for (let i = 0; i < n; i++) {
    nums[(nums[i]-1) % n]  += n
  }

  for (let i = 0; i < n; i++) {
      if(nums[i] > 2 * n) {
          res.push(i+1)
      }
  }
  return res
};

// 原地哈希法

var findDuplicates = function(nums) {
  let res = []
  for(let item of nums) {
      let abs_num = Math.abs(item)

      if(nums[abs_num-1] < 0) {
          res.push(abs_num)
      } else {
          nums[abs_num-1] *= -1
      }
  }

  return res
};