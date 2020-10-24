/* 139. 单词拆分 */
/*
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-break
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/*
思路：遵从动态规划的思想，即从小规模的问题得出大规模问题解
以示例的输入为例：
要想确定 leetcode 这个字符串是由多个单词组成的，{leet, code}
可以先确定 leetcod  +  e ， 后半部分是不是由一个单词组成的，即 e 发现不是，继续往前寻找，
因为一旦 e 不是由单词组成的，前面是否是由单词组成的都不重要了，这种组合已经无法满足题目的要求，无法按多个单词来拆分，继续向前推理

leetco + de 同上， de 不是单词
leetc + ode 
...
leet + code 直到这个拆分，发现 code 是单词词组里面的一个单词，此时就要确定 leet 也是由单词组构成的就好了，此时一看 ，leet 刚好在单词组里面，
所以该字符串可以由字典拆分，如果 leet 不在单词组里，需要对 leet 进行相同的规则的判断，即把它拆解成更小规模的问题，即判断 leet 这个字符串是否由单词组构成的。

有了这个思路后，可以进行正向的推理，dp[0] = true, 指的是空字符串可以被任何单词列表拆分
字符串长度为 len
字符串长度从 1 => len，依次判断
当字符串长度为 1 的时候， s[0..1] 是否在单词列表中，是的话 dp[1] 标记为 true
当字符串长度为 2 的时候， s[0..1] + s[1..2] 、 s[0..2] 只要其中的任意一种情况符合单词拆分 dp[2] 就标记为 true
...
当字符串长度为 len 的时候，只要存在 s[0..j] + s[j..len]  ，dp数组记录了s[0..j]字符串的拆分情况，即 dp[j] = true , s[j..len] 是一个单词，该字符串就是可以被单词组拆分的 

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

  let set = new Set(wordDict)
  let len = s.length

  let dp = [true]

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true
        break;
      }
    }
  }

  return dp[len] || false
};
