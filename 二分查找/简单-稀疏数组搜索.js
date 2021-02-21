/*

面试题 10.05. 稀疏数组搜索
稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

示例1:

 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。
示例2:

 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 输出：4
提示:

words的长度在[1, 1000000]之间

https://leetcode-cn.com/problems/sparse-array-search-lcci/

*/ 


/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
  let left = 0, right = words.length - 1

  while(left <= right) {
      let mid = (left + right) >> 1

      // 记录默认的 mid 值
      let temp = mid

      while(words[mid] === '' && mid < right) ++mid

      // 如果此时 word[mid] === '' 说明 temp 右侧都是空的，所以将右边界改变
      if(words[mid] === '') {
          right = temp - 1
          continue
      }

      if(words[mid] === s) {
          return mid
      } else if (s < words[mid]) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return -1
};
