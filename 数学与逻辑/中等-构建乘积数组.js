/*
剑指 Offer 66. 构建乘积数组
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

 

示例:

输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
 

提示：

所有元素乘积之和不会溢出 32 位整数
a.length <= 100000
*/ 

// 思路: 利用动态规划，上下三角半区
/**
 * @param {number[]} a
 * @return {number[]}
 */
 var constructArr = function(a) {
  let length = a.length
  let left = new Array(length)
  let right = new Array(length)

  left[0] = 1
  right[length - 1] = 1

  // 每一行(i)三角区的左半边
  for(let i = 1; i < length; i++) {
      left[i] = left[i-1]*a[i-1]
  }

  // 每一行(i)三角区的右半边
  for(let i = length - 2; i >= 0; i--) {
      right[i] = right[i+1]*a[i+1]
  }

  let res = []

  // 左右半区相乘得到每一行的结果B[i]
  for(let i = 0; i < length; i++) {
      res[i] = left[i]*right[i]
  }

  return res

};
