/*
120. 三角形最小路径和

给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

 

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

 

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 首先先采用 O(n2) 的空间复杂度来实现算法

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (!triangle || triangle.length === 0) return 0

  let length = triangle.length

  let dp = Array.from({
    length: length + 1
  }, (item, idx) => new Array(idx + 1).fill(0))

  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    }
  }

  return dp[0][0]
};

// dp降维: 空间复杂度 O(n) 的解法
var minimumTotal = function (triangle) {
  if (!triangle || triangle.length === 0) return 0

  let length = triangle.length

  let dp = new Array(length + 1).fill(0)

  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }

  return dp[0]
};
