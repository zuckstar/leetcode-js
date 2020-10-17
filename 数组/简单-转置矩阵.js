/*
  leetcode - 867. 转置矩阵
  https://leetcode-cn.com/problems/transpose-matrix/
  
  给定一个矩阵 A， 返回 A 的转置矩阵。
  矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

  示例 1：

  输入：[[1,2,3],[4,5,6],[7,8,9]] 
  输出：[[1,4,7],[2,5,8],[3,6,9]]
  
  示例 2：

  输入：[[1,2,3],[4,5,6]]
  输出：[[1,4],[2,5],[3,6]]

  提示：

  1 <= A.length <= 1000
  1 <= A[0].length <= 1000

*/
const eg1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const eg2 = [
  [1, 2, 3],
  [4, 5, 6]
]

const log = console.log

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const row = A.length;
  const col = A[0].length;

  let res = Array.from({
    length: col
  }, () => [])

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      res[i].push(A[j][i])
    }
  }
  return res
};

log(transpose(eg2))
