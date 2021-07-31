/*
39. 组合总和
给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 

对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

 

示例 1：

输入: candidates = [2,3,6,7], target = 7
输出: [[7],[2,2,3]]
示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
示例 3：

输入: candidates = [2], target = 1
输出: []
示例 4：

输入: candidates = [1], target = 1
输出: [[1]]
示例 5：

输入: candidates = [1], target = 2
输出: [[1,1]]
 

提示：

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
candidate 中的每个元素都是独一无二的。
1 <= target <= 500
*/

var combinationSum = function (candidates, target) {
  // 定义结果集
  let res = []

  // 单次结果集
  let temp = []

  candidates.sort((a, b) => a - b)

  // 定义 DFS 函数
  let backtrace = function (target, begin) {
    // 回溯结束，添加结果
    if (target === 0) {
      res.push(temp.slice(0))
      return
    }

    // 剪枝
    if (target < 0) {
      return
    }

    for (let i = begin; i < candidates.length; i++) {
      temp.push(candidates[i])

      backtrace(target - candidates[i], i) // 传入 i 而不是 i + 1 是因为当前数字可以重复

      temp.pop()
    }
  }

  backtrace(target, 0)

  return res
}
