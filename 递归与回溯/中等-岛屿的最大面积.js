/*
695. 岛屿的最大面积
给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

 

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。

 

注意: 给定的矩阵grid 的长度和宽度都不超过 50。

https://leetcode-cn.com/problems/max-area-of-island/
*/

var maxAreaOfIsland = function (grid) {
  let m = grid.length
  let n = grid[0].length

  let maxSum = 0
  let visited = Array.from({ length: m }, () => [])

  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      visited[i][j] === true ||
      grid[i][j] === 0
    ) {
      return 0
    }

    visited[i][j] = true

    return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curSum = dfs(i, j)

      maxSum = Math.max(curSum, maxSum)
    }
  }

  return maxSum
}
