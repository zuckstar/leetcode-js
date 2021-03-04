/*
220. 存在重复元素 III
在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 k。

如果存在则返回 true，不存在返回 false。

 

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:

输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false

https://leetcode-cn.com/problems/contains-duplicate-iii/
*/ 

// 解法一：穷举法
// 时间复杂度 O(n2)
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i = 0; i < nums.length - 1; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if(Math.abs(nums[j] - nums[i]) <= t && Math.abs(j-i) <= k) {
              return true
          }
      }
  }
  return false
};

// 解法二：桶举法
// 该题和【存在重复元素2】的区别是本题判断的条件不是两个相等元素，而是差的绝对值小于等于 t 的两个元素
// 需要把【差的绝对值小于等于 t 的两个元素】这种条件转换成一种情况

var containsNearbyAlmostDuplicate = function(nums, k, t) {

  if(k < 0) return false

  let map = new Map()

  const getId = (num) => {
      return Math.floor(num / (t+1))
  }

  for(let i = 0; i < nums.length; i++) {
    
      let id = getId(nums[i]) // 获取桶 id

      if(map.has(id)) {
          // 这个条件意味着在当前桶下(nums[i] 和 nums[j] 的差的绝对值小于等于 t) 同时 i 和 j 的差值也小于等于 k
          return true
      } else if(map.has(id+1) && Math.abs(map.get(id+1) - nums[i]) <= t) {
          // 还要和右边的桶比较下，看下是否满足条件
          return true
      } else if(map.has(id-1) && Math.abs(map.get(id-1) - nums[i]) <= t) {
          // 还要和左边的桶比较下，看下是否满足条件
          return true
      }

      map.set(id, nums[i])
      
      if(i >= k) {
      // 大桶装满了    
          map.delete(getId(nums[i-k]))
      }
  }
  return false
};
