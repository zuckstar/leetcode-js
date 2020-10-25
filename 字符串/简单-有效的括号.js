/*
20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


// 思路： 巧用 js 的 Map 数据结构，如果该字符串数组长度为奇数直接返回 false，一定存在无法匹配的括号。
// 利用栈来求解，如果遇到左括号就入栈，遇到右括号就取栈顶元素来匹配，匹配成功则继续执行，匹配失败则直接返回 false
// 最后检查栈中是否还存在元素，以保证所有的左括号都得到了匹配，若为空则返回 true, 若不为空则返回 false
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true
  if (s.length % 2 === 1) return false
  let stack = []
  let map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])
  for (let ch of s) {
    if (map.has(ch)) {
      stack.push(ch)
    } else {
      let val = stack.pop() || -1
      if (map.get(val) !== ch) {
        return false
      }
    }
  }
  return !stack.length
};
