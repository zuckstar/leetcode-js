/*
15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/
*/

// 解法：双指针
// 固定一个数，剩下的数字继续做两数之和（双指针法）
// 优化1：去重，nums[i] 去重复，L,R去重 
// 优化2：排序后最左值如果大于0则直接退出


var threeSum = function(nums) {
  let res = []
  
  if(nums == null || nums.length < 3) return res

  // 排序

  nums.sort((a,b)=>a-b)

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > 0) break; // 此时三数之和已经不可能为0了

      if(i > 0 && nums[i] === nums[i-1]) continue; // 去重


      let L = i+1
      let R = nums.length - 1


      while(L < R) {
          let sum = nums[i] + nums[L] + nums[R]

          if(sum === 0) {
              res.push([nums[i], nums[L], nums[R]])

              // 去重
              while(L < R && nums[L] == nums[L+1]) L++
              while(L < R && nums[R] == nums[R-1]) R--

              L++
              R-- 

          } else if(sum < 0) {
              L++
          } else if(sum > 0) {
              R--
          }
      }
  }

  return res
};