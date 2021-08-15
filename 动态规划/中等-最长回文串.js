/*
5. 最长回文子串
    
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/*
  求最长回文子串，可以采用多种方法来求解这个问题，不着急解决问题，重要的是思考和优化题解的过程

 1. 首先想到的是暴力求解法，可以枚举当前字符串的所有子串，然后再判断是否是回文串
    列举的时间复杂度是 O(n2) 加上每个子串都需要 O(n) 的时间复杂度来判断回文串，所以总共
    的时间复杂度是 O(n3), 空间复杂度 O(1)，由于该解时间复杂度过高，而且也不是考察的重点，
    就不写具体的算法了

*/

/*
 2. 中心扩展法 ，遍历每个字符串，从当前字符开始，当左右两边字符串相等的时候，
    向两边扩展，记录扩展的长度，取最大值。这种解法注意回文串的长度有奇数回文串（aba）和偶数（aabb）回文串就可以了,还有边界条件。

    注意点：注意begin的算法，由于回文串的长度可能为奇数，可能为偶数，需要兼容两种情况
    begin = i - ((len - 1) >> 1)
    使用移位算法的时候一定注意加上扩号，因为移位的优先级是最低的。

    时间复杂度： O(n2) 枚举的中心位置的个数 2n 奇、偶各一遍
    空间复杂度： O(1)
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || !s.length) return ''

  let length = s.length

  let maxLength = 0,
    begin = 0

  for (let i = 0; i < length; i++) {
    let oddLen = expandAroundCenter(s, i, i)
    let evenLen = expandAroundCenter(s, i, i + 1)
    let len = Math.max(oddLen, evenLen)

    if (len > maxLength) {
      maxLength = len
      begin = i - ((len - 1) >> 1) // 关键点二：len - 1 是为了保证偶数长度下也计算出正确的起始值
    }
  }
  return s.substr(begin, maxLength)
}

var expandAroundCenter = function (s, left, right) {
  let length = s.length
  while (left >= 0 && right <= length - 1 && s[left] == s[right]) {
    left--
    right++
  }
  return right - left - 1 // 关键点一：right 和 left 都是 ++，-- 后的值，要拿到最终的字符长度需要通过 right -left - 1 来计算
}

/*
 3. 动态规划法：更大规模的问题，可以由小规模的问题的求解上得来。
 
    用 dp[i][j] 表示 s 中从 i 到 j（包括 i 和 j）, dp[i][j] 是否可以形成回文
    取决于 dp[i+1][j-1] 是否是回文串，如果是且 s[i] == s[j], 则 dp[i][j] 也是回文串，由此可以得出状态转移方程

    dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1]

    关键点1：
    
    有两种情况是不需要计算状态转移方程的，
  
    一种是 i == j => j - i == 0, 即单字符的时候，一定是回文串，返回 true
    
    一种是 j - i == 1, 即 i,j 为相邻字符的时候，可以直接通过 s[i] === s[j] 来判断是不是回文串，而不需要再使用状态转移方程来计算了
    
    所以综上可得， j - i < 2 的时候不用计算状态转移方程。

    关键点2：
    
    dp 是一个二维数组，可以看成一个拥有横(j)纵(i)轴表格，dp[i][j] 可以由 dp[i+1][j-1] 得来，而在图表上 dp[i+1][j-1] 总在 dp[i][j] 的左下方，i 总小于 j, 外层循环可以用 j 从 0 -> length 内层循环可以用 i 从 0 -> j
    
    时间复杂度： O(n2) 
    空间复杂度： O(n2)
*/
var longestPalindrome = function (s) {
  let length = s.length
  if (length < 2) return s

  let dp = Array.from(
    {
      length,
    },
    () => []
  )
  let max = 1
  let begin = 0

  for (let j = 0; j < length; j++) {
    for (let i = 0; i <= j; i++) {
      if (j - i < 2) {
        dp[i][j] = s[i] === s[j]
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
      }
      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1
        begin = i
      }
    }
  }

  return s.substr(begin, max)
}

/*
 4. Manacher(马拉车)算法

 马拉车算法比较难以理解，这里先跳过，它可以把时间复杂度降到 O(n)，
 不过我们可以学习其加入特殊符号来统一奇数和偶数的情况，来优化之前动态规划中的回文长度为奇数偶数的情况。
*/
