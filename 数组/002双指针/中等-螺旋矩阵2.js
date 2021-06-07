/*
54. 螺旋矩阵
给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。


https://leetcode-cn.com/problems/spiral-matrix-ii/
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  if(n == 1) return [[1]]

  let size = n * n 

  let left = 0
  let right = n - 1 
  let top = 0
  let bottom = n - 1

  let res = new Array(n)

  for(let i = 0; i < n; i++) {
      res[i] = new Array(n).fill(0)
  }

  let j = 1
  while(j <= size) {
      for(let i = left; i <= right; i++) {
          res[top][i] = j++
      }

      top++


      for(let i = top; i <= bottom; i++) {
          res[i][right] = j++
      }

      right--

      for(let i = right; i >= left; i--) {
          res[bottom][i] = j++
      }

      bottom--

      for(let i = bottom; i >= top; i--) {
          res[i][left] = j++
      }

      left++
  }

  return res

};