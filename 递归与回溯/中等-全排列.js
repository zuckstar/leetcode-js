/*
46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

https://leetcode-cn.com/problems/permutations/
*/

var permute = function (nums) {
  const res = []

  const swap = (i, j) => {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  const permuteFn = (k) => {
    if (k == nums.length) {
      res.push(nums.slice())
      return
    }

    for (let i = k; i < nums.length; i++) {
      swap(i, k)

      permuteFn(k + 1)

      swap(i, k)
    }
  }

  permuteFn(0)

  return res
}
