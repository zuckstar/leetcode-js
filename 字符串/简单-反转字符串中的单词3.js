/*
557. 反转字符串中的单词 III


给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 

示例：

输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 这题注意一点，javascript 字符串一旦定义了，是不可变的，也就是说 let s = 'abc' s[0] = '1' 打印的 s 还是 'abc'
// 如果用双指针替换法，字符串结果最终不会被改变，最好的方法是把字符串转数组，翻转后再连接成一个字符串

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ').map(item =>
    item.split('').reverse().join('')).join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"))
