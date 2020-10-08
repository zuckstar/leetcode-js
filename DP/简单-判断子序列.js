/*
  392. 判断子序列
  
  给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

  你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

  字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

  示例 1:
  s = "abc", t = "ahbgdc"

  返回 true.

  示例 2:
  s = "axc", t = "ahbgdc"

  返回 false.

  后续挑战 :

  如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/is-subsequence
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针解法
// var isSubsequence = function (s, t) {
//   let slen = s.length
//   let tlen = t.length
//   let i = 0,
//     j = 0
//   while (i < slen && j < tlen) {
//     if (s[i] === t[j]) {
//       i++
//     }
//     j++
//   }
//   if (i === slen) return true
//   return false
// };
//  后续挑战 : 动态规划法

var isSubsequence = function (s, t) {
  let slen = s.length
  let tlen = t.length

  let dp = Array.from({
    length: tlen + 1
  }, () => [])

  for (let i = 0; i < 26; i++) {
    dp[tlen][i] = tlen
  }

  for (let i = tlen - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t[i].charCodeAt() - 97 == j) {
        dp[i][j] = i
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }

  let pos = 0
  for (let i = 0; i < slen; i++) {
    let temp = dp[pos][s[i].charCodeAt() - 97] // 获取s当前字母在t中最近出现的位置
    if (temp == tlen) { // 该位置超出了边界，则返回false
      return false
    }
    pos = temp + 1 // 记得将该位置往后滚动一位，因为已经匹配过一次了，相同位置不能重复匹配
  }
  return true
};

console.log(isSubsequence("abc", "ahbgdc"))
