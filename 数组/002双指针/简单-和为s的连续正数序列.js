/*
剑指 Offer 57 - II. 和为s的连续正数序列
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5

https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
*/ 

/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function(target) {
  let res = []
  let l = 1
  let r = 1
  let sum = 0

  while(l <= (target >> 1)) {
      if(sum < target) {
          sum += r
          r++
      } else if(sum > target) {
          sum -= l
          l++
      } else {
          let temp = []
          for(let j = l; j < r; j++) {
              temp.push(j)
          }
          res.push(temp)
          sum -= l
          l++
      }
  }

  return res
};
