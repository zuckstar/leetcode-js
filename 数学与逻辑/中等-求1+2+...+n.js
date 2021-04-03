/*
剑指 Offer 64. 求1+2+…+n
求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

 

示例 1：

输入: n = 3
输出: 6
示例 2：

输入: n = 9
输出: 45


https://leetcode-cn.com/problems/qiu-12n-lcof/
*/ 
// 递归法
var sumNums = function(n) {
  const addSum = (k) => {
      if(k == 1) return 1
      return k + addSum(k-1)
  }
  return addSum(n)
};

// 优化，不使用 if

 var sumNums = function(n) {
  let res = 0
  const addSum = (k) => {
      let b = k > 1 && addSum(k-1) > 0
      res += k
  }
  addSum(n)
  return res
};
