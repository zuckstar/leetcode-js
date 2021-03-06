/*
剑指 Offer 12. 矩阵中的路径
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

 

示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
 

提示：

1 <= board.length <= 200
1 <= board[i].length <= 200

https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
*/ 

// 思路: 回溯算法：矩阵枚举 + DFS + 剪枝
var exist = function(board, word) {
  let row = board.length
  let col = board[0].length

  const dfs = (i, j, k) => {
      
      if(i < 0 || i >= row || j < 0 || j >= col || word[k] != board[i][j]) return false
      
      if(k >= word.length - 1) return true // 判断为真的时机放在这里，可以减少一轮递归
      
      board[i][j] = ''  

      let res = dfs(i+1, j, k+1) || dfs(i-1, j, k+1) || dfs(i, j+1, k+1) || dfs(i, j-1, k+1)

      board[i][j] = word[k] // 无需声明 temp , 直接使用 word[k] 的值赋值回去

      return res
  }

  for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
          if(dfs(i, j, 0)) {
              return true // 剪枝
          }
      }   
  }

  return false
};

