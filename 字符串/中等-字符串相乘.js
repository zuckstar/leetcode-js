// 43. 字符串相乘
/*
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 


// 利用小学的竖乘法来解题
// 1. 0 乘以任何数为 0
// 2. 两数相乘，乘积的长度一定 <= 两数长度之和
// 3. 被乘数的一位 与 乘数的每一位相乘，乘积不会超过 9 x 9 = 81，不超过两位
//    个位数放在 i + j + 1 ，进位数放在 i + j (i和j分别为当前乘数和被乘数字符串当前字符的位置，i+j+1 及 i+j 是结果字符串的字符位)
// 4. 用正则表达式去除多余的开头零


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
  let len1 = num1.length
  let len2 = num2.length

  let arr = new Array(len1+len2).fill(0)

  for(let i = len1 - 1; i >= 0; i--) {
      for(let j = len2 - 1; j >= 0; j--) {
          let tmp = num1[i]*num2[j]+arr[i+j+1]
          arr[i+j+1] = tmp % 10
          arr[i+j] += Math.floor(tmp / 10)
      }
  }

  return arr.join('').replace(/^0+/,'')
};
