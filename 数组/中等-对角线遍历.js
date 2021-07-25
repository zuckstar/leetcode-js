/*
498. 对角线遍历
给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。



示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

https://leetcode-cn.com/problems/diagonal-traverse/

*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {

  let row = mat.length // 行
  let col = mat[0].length // 列

  let i = 0 // 当前的 x+y 总值，即当前矩阵的第i个对角线
  let res = []

  // 最多轮数不会超过 row + col,因为是从第 0 轮开始的，所以不需要  <= row+col
  while (i < row + col) {

    // 从左下角到右上角, 此时 x 的坐标是在往上走的，x 坐标会越来越小，y 坐标是在往右走的，y 坐标会越来越大
    let x1 = (i < row) ? i : row - 1
    let y1 = i - x1

    // 控制 x,y 坐标不出边界
    while (x1 >= 0 && y1 < col) {
      res.push(mat[x1][y1])
      x1--
      y1++
    }

    i++ // 轮数+1

    if (i >= col + row) break; // 提前结束


    // 从右上角到左下角，坐标走向相反
    let y2 = (i < col) ? i : col - 1
    let x2 = i - y2

    while (y2 >= 0 && x2 < row) {
      res.push(mat[x2][y2])
      y2--
      x2++
    }

    i++
  }

  return res


};

// 优化
var findDiagonalOrder = function (mat) {

  let row = mat.length // 行
  let col = mat[0].length // 列

  let i = 0 // 当前的 x+y 总值，即当前矩阵的第i个对角线
  let res = []

  for (let i = 0; i < row + col; i++) {

    let isEven = (i % 2) === 0

    let m = isEven ? row : col
    let n = isEven ? col : row

    let x = i < m ? i : m - 1
    let y = i - x

    while (x >= 0 && y < n) {
      res.push(isEven ? mat[x][y] : mat[y][x])
      x--
      y++
    }

  }

  return res

};