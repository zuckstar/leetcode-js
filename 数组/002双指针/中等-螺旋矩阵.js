/*
剑指 Offer 29. 顺时针打印矩阵
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

限制：

0 <= matrix.length <= 100
0 <= matrix[i].length <= 100
注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/

https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
*/ 

// 利用 size 来限制遍历的次数，解决边界问题
var spiralOrder = function(matrix) {
    
  let res = []
  let m = matrix.length
  let n = matrix[0].length

  let size = m * n 

  let left = 0
  let right = n - 1
  let top = 0
  let bottom = m - 1



  while(size >= 1) {
      for(let i = left; i <= right && size >= 1; i++) {
          res.push(matrix[top][i])
          size--
      }

      top++

      for(let i = top; i <= bottom && size >= 1; i++) {
          res.push(matrix[i][right])
          size--
      }

      right--

      for(let i = right; i >= left && size >= 1; i--) {
          res.push(matrix[bottom][i])
          size--
      }

      bottom--

      for(let i = bottom; i >= top && size >= 1; i--) {
          res.push(matrix[i][left])
          size--
      }

      left++
  }

  return res
};
