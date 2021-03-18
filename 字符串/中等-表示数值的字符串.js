/*
剑指 Offer 20. 表示数值的字符串
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
*/ 
/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
  // 指针 cursor 记录扫描的位置
  // 定义扫描有符号整数的函数
  // 定义扫描无符号整数的函数
  // 跳过首尾空格，开头整数、小数点、小数部分、e、e的整数部分，e前要包含整数
  
      let cursor = 0
      let isValid = false 
  
      const scanInteger = (s) => {
          if(s[cursor] == '+' || s[cursor] == '-') {
              cursor++
          }
          return scanUnsignedInteger(s)
      }
  
      const scanUnsignedInteger = (s) => {
          let temp = cursor
  
          while(s[cursor] >= '0' && s[cursor] <= '9') {
              cursor++
          }
  
          // 需要判断当前指针是否指向 0-9
          return s[temp] >= '0' && s[temp] <= '9'
      }
  
      // 去首空
      while(s[cursor] == ' ') {
          cursor++
      }
  
      // 扫描整数部分
      isValid = scanInteger(s)
  
  
      // 扫描小数部分
      if(s[cursor] == '.') {
          cursor++
          // 像 16.e5 这种也是可以的，所以不能把 isValid 赋值为 false
          if(scanUnsignedInteger(s)) {
              isValid = true
          }
      }
  
      // 扫描 e 部分
      if(s[cursor] == 'e' || s[cursor] == 'E') {
          cursor++
          if(isValid) {
              isValid = scanInteger(s)
          }
      }
  
      // 去尾空
      while(s[cursor] == ' ') {
          cursor++
      }
  
      // 指针没越界，说明字符串没扫描完成，返回假
      if(s[cursor] !== undefined) {
          return false
      }
  
      return isValid
  
  };
