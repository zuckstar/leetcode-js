/*
剑指 Offer 05. 替换空格
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
 

限制：

0 <= s 的长度 <= 10000

https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

*/ 


// 方法一：遍历替换
var replaceSpace = function(s) {
  let arr = s.split('')

  for(let i = 0; i < arr.length; i++) {
      if(arr[i] == ' ') {
          arr[i] = '%20'
      }
  }
  return arr.join('')
};

// 方法二：正则替换
var replaceSpace = function(s) {
  return s.replace(/\s/g, '%20')
};

