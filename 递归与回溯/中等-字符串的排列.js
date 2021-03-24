/*
剑指 Offer 38. 字符串的排列
输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8

https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
*/ 

// 思路：回溯法+剪枝

var permutation = function(s) {
  let arr = s.split('')
  let res = []

  const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  const dfs = (x) => {
      if(x === arr.length - 1) {
          res.push(arr.join(''))
          return;
      }

      let set = new Set()

      for(let i = x; i < arr.length; i++) {
          if(set.has(arr[i])) {
              continue
          }
          set.add(arr[i])

          swap(arr, i, x)
          dfs(x+1)
          swap(arr, i, x)
      }
  }

  dfs(0)

  return res
};
