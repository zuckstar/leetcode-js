/*
  118. 杨辉三角

  https://leetcode-cn.com/problems/pascals-triangle/
  
  给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

  在杨辉三角中，每个数是它左上方和右上方的数的和。

  示例:

  输入: 5
  输出:
  [
      [1],
      [1,1],
    [1,2,1],
    [1,3,3,1],
  [1,4,6,4,1]
  ]

*/


const eg1 = 6

const log = console.log

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

  let ans = []

  for (let i = 0; i < numRows; i++) {
    let row = []
    row[0] = 1
    row[i] = 1

    if (i > 1) {
      for (let j = 1; j < i; j++) {
        row[j] = ans[i - 1][j - 1] + ans[i - 1][j]
      }
    }
    ans.push(row)
  }

  return ans
};

log(generate(eg1))
