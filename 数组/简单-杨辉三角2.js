/*
  119. 杨辉三角 II

  https://leetcode-cn.com/problems/pascals-triangle-ii/
  
  给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
  
  在杨辉三角中，每个数是它左上方和右上方的数的和。

  示例:

  输入: 3
  输出: [1,3,3,1]

*/


const eg1 = 2

const log = console.log

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/* 
  利用杨辉三角一的算法，每一行以上一行的基础进行累加计算，为了防止数组越界，每次计算时在数组头加一个 0，同时最后一个1是不用计算的，都是从上一次保留下来的。
  
  进一步优化：杨辉三角同一行有对称的特性，可以计算到数组中部的时候，后半个数组可以直接取前半个数组的值。

  数学法：杨辉三角有数学计算公式，第n行每一个项式的值可以通过数学推到得出，直接套公式计算。
  */

var getRow = function (rowIndex) {
  let res = [1]
  for (let i = 0; i < rowIndex; i++) {
    res.unshift(0)
    for (let j = 0; j <= i; j++) {
      res[j] = res[j] + res[j + 1]
    }
  }
  return res
};

log(getRow(eg1))
