/*
415. 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。



提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

https://leetcode-cn.com/problems/add-strings/
*/

var addStrings = function (num1, num2) {
  let res = []

  let i = num1.length - 1
  let j = num2.length - 1

  let add = 0

  while (i >= 0 || j >= 0 || add > 0) {
    let n1 = i >= 0 ? num1.charAt(i) - '0' : 0
    let n2 = j >= 0 ? num2.charAt(j) - '0' : 0


    let temp = n1 + n2 + add
    res.push(temp % 10)

    add = Math.floor(temp / 10)

    i--
    j--
  }

  return res.reverse().join('')
};