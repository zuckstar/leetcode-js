// 面试题 01.02. 判定是否互为字符重排
/*

给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-permutation-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


*/ 

// 思路： 
// 1. 如果两个字符串的长度不相等，那么他们必然不可能互为对方的重排
// 2. 使用一个辅助数组来记录即可，如果两个字符串互为重排，那么两字符串中字符出现 
// 的个数必然相等，只需要开辟一个长度为 26 的数组，让两字符串中字符出现的次数互相抵消，若数组最后的每个字母的频次都为0，说明两字符串中字母出现的次数相等，返回 true，否则返回 false


var CheckPermutation = function(s1, s2) {

  if(s1.length !== s2.length) return false
  let alphabet = new Array(26).fill(0)
  
  for(let i = 0; i < s1.length; i++) {
      alphabet[s1[i].charCodeAt()-97]++
      alphabet[s2[i].charCodeAt()-97]--
  }

  for(let item of alphabet) {
      if(item != 0) return false
  }

  return true
};

console.log(CheckPermutation('abc','bad'))
