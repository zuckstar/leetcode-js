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

// 注意指针的边界，以及改变的是横坐标还是纵坐标即可
 var spiralOrder = function(matrix) {
  let res = []
  let row = matrix.length

  if(!row) return res

  let col = matrix[0].length

  if(!col) return res

  let l = 0, r = col - 1, t = 0, b = row - 1, size = col * row

  while(res.length < size) {
      for(let i = l; i <= r; i++) res.push(matrix[t][i])
      t++

      for(let i = t; i <= b; i++) res.push(matrix[i][r])
      r--

      if(res.length == size) break

      for(let i = r; i >= l; i--) res.push(matrix[b][i])
      b--

      for(let i = b; i >= t; i--) res.push(matrix[i][l])
      l++
  }
  return res
};
