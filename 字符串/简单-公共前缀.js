/*
14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// 解法1：
// 思路：使用数组默认的 sort 方法先进行一次排序(js数组的sort方法，默认就是字符串比较)，排序之后，相似的字符在一侧，也就说是数组头尾的两个字符串是差异最大的
// 直接提取他们的公共前缀就是整个字符串数组的公共前缀，时间复杂度 O(nlogn+m)


var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  strs.sort()
  let fist = strs[0]
  let last = strs[strs.length - 1]

  return lcp(fist, last)


};
var lcp = function (str1, str2) {
  let str = ''
  let len1 = str1.length
  let len2 = str2.length
  let len = Math.min(len1, len2)

  for (let i = 0; i < len; i++) {
    if (str1[i] === str2[i]) {
      str += str1[i]
    } else {
      break
    }
  }
  return str
}


// 解法2 - 横向比较法，时间复杂度 O(n*m),n 为数组长度，m为字符串平均长度
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  let common = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < strs[i].length; j++) {
      if (strs[i][j] !== common[j]) {
        break;
      }
    }
    common = common.slice(0, j)
    if (common === '') return common
  }
  return common
};


console.log(longestCommonPrefix(["dog", "racecar", "car"]))
